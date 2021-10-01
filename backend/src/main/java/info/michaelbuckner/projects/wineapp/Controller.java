package info.michaelbuckner.projects.wineapp;

import info.michaelbuckner.projects.wineapp.dao.WineRepository;
import info.michaelbuckner.projects.wineapp.dao.WineryRepository;
import info.michaelbuckner.projects.wineapp.dto.WineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/taster/v1")
public class Controller {

    @Autowired
    WineRepository wineRepository;
    @Autowired
    WineryRepository wineryRepository;

    @PostMapping("/")
    public WineDTO create(@RequestBody final WineDTO pWineDTO) {

        return WineDTO.of(wineRepository.save(pWineDTO.toWine()));
    }

    @GetMapping("/{id}")
    public WineDTO read(@PathVariable("id") final int pId) {

        return  wineRepository.findById(pId)
                .map(wine -> WineDTO.of(wine))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public WineDTO update(@PathVariable("id") final int pId, @RequestBody final WineDTO pWineDTO) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") final int pId) {

    }
}
