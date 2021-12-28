package info.michaelbuckner.projects.wineapp.assessments.dto;

import info.michaelbuckner.projects.wineapp.assessments.model.Assessment;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.val;

@Data
@RequiredArgsConstructor
public class AssessmentDTO {

    private int assessmentId;
    private int wineId;
    private int acidity;
    private int sweetness;
    private int tannins;
    private int burn;
    private int body;
    private double price;
    private String visualDesc;
    private String olfactoryDesc;
    private String tasteDesc;
    private String finalAssessment;
    private boolean buyAgain;

    public Assessment toAssessment() {
        val assessment = new Assessment();

        assessment.setAssessmentId(assessmentId);
        assessment.setWineId(wineId);
        assessment.setAcidity(acidity);
        assessment.setSweetness(sweetness);
        assessment.setTannins(tannins);
        assessment.setBurn(burn);
        assessment.setBody(body);
        assessment.setPrice(price);
        assessment.setVisualDesc(visualDesc);
        assessment.setOlfactoryDesc(olfactoryDesc);
        assessment.setTasteDesc(tasteDesc);
        assessment.setFinalAssessment(finalAssessment);
        assessment.setBuyAgain(buyAgain);

        return assessment;
    }

    public static AssessmentDTO of(final Assessment pAssessment) {
        val assessmentDTO = new AssessmentDTO();

        assessmentDTO.setAssessmentId(pAssessment.getAssessmentId());
        assessmentDTO.setWineId(pAssessment.getWineId());
        assessmentDTO.setAcidity(pAssessment.getAcidity());
        assessmentDTO.setSweetness(pAssessment.getSweetness());
        assessmentDTO.setTannins(pAssessment.getTannins());
        assessmentDTO.setBurn(pAssessment.getBurn());
        assessmentDTO.setBody(pAssessment.getBody());
        assessmentDTO.setPrice(pAssessment.getPrice());
        assessmentDTO.setVisualDesc(pAssessment.getVisualDesc());
        assessmentDTO.setOlfactoryDesc(pAssessment.getOlfactoryDesc());
        assessmentDTO.setTasteDesc(pAssessment.getTasteDesc());
        assessmentDTO.setFinalAssessment(pAssessment.getFinalAssessment());
        assessmentDTO.setBuyAgain(pAssessment.isBuyAgain());

        return assessmentDTO;
    }
}
