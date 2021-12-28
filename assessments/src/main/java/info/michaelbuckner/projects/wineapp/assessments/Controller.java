package info.michaelbuckner.projects.wineapp.assessments;

import info.michaelbuckner.projects.wineapp.assessments.dao.AssessmentRepository;
import info.michaelbuckner.projects.wineapp.assessments.dto.AssessmentDTO;
import info.michaelbuckner.projects.wineapp.assessments.model.Assessment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/assessment/v1")
public class Controller {

    @Autowired
    AssessmentRepository assessmentRepository;

    @PostMapping("/")
    public AssessmentDTO create(@RequestBody final AssessmentDTO pAssessmentDTO) {
        System.out.println("IN CREATE");
        Assessment assessment = assessmentRepository.save(pAssessmentDTO.toAssessment());
        return AssessmentDTO.of(assessment);
    }

    @GetMapping("/{wineId}")
    public AssessmentDTO read(@PathVariable(name = "wineId") final int pWineId) {
        return assessmentRepository.getAssessmentByWineId(pWineId)
                .map(assessment -> AssessmentDTO.of(assessment))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{assessmentId}")
    public AssessmentDTO update(@PathVariable(name = "assessmentId") final int pAssessmentId, @RequestBody final AssessmentDTO pAssessmentDTO) {
        if (assessmentRepository.existsById(pAssessmentId)) {
            pAssessmentDTO.setAssessmentId(pAssessmentId);
            Assessment assessment = assessmentRepository.save(pAssessmentDTO.toAssessment());
            return AssessmentDTO.of(assessment);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{assessmentId}")
    public void delete(@PathVariable(name = "assessmentId") final int pAssessmentId) {
        if (assessmentRepository.existsById(pAssessmentId)) {
            assessmentRepository.deleteById(pAssessmentId);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
