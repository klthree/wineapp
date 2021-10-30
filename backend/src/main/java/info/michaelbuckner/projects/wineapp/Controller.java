package info.michaelbuckner.projects.wineapp;

import info.michaelbuckner.projects.wineapp.dao.WineRepository;
import info.michaelbuckner.projects.wineapp.dto.WineDTO;
import info.michaelbuckner.projects.wineapp.model.Wine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/taste/v1")
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    WineRepository wineRepository;

    @PostMapping("/")
    public WineDTO create(@RequestBody final WineDTO pWineDTO) {
        pWineDTO.getWinery();

        return WineDTO.of(wineRepository.save(pWineDTO.toWine()));
    }

    @GetMapping("/{id}")
    public WineDTO read(@PathVariable("id") final int pId) {
        return  wineRepository.findById(pId)
                .map(wine -> WineDTO.of(wine))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/")
    public List<WineDTO> getAllWines() {
        return  StreamSupport.stream(wineRepository.findAll().spliterator(), false)
                .map(WineDTO::of)
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public WineDTO update(@PathVariable("id") final int pId, @RequestBody final WineDTO pWineDTO) {
//        return wineRepository.findById(pId)
//                .or(() -> {
//                    pWineDTO.setWineId(pId);
//                    return WineDTO.of(wineRepository.save(pWineDTO.toWine())); // <-- Needs to be an optional
//                })
//                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        if (wineRepository.existsById(pId)) {
            pWineDTO.setWineId(pId);
            return WineDTO.of(wineRepository.save(pWineDTO.toWine()));
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") final int pId) {
        if (wineRepository.existsById(pId)) {
            wineRepository.deleteById(pId);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
