package info.michaelbuckner.projects.wineapp;

import info.michaelbuckner.projects.wineapp.client.WineryClient;
import info.michaelbuckner.projects.wineapp.dao.ColorRepository;
import info.michaelbuckner.projects.wineapp.dao.WineRepository;
import info.michaelbuckner.projects.wineapp.dto.ColorDTO;
import info.michaelbuckner.projects.wineapp.dto.WineDTO;
import info.michaelbuckner.projects.wineapp.dto.WineryDTO;
import info.michaelbuckner.projects.wineapp.model.Color;
import info.michaelbuckner.projects.wineapp.model.Wine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/taste/v1")
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    WineRepository wineRepository;

    @Autowired
    ColorRepository colorRepository;

    @Autowired
    WineryClient wineryClient;

    @PostMapping("/")
    public WineDTO create(@RequestBody final WineDTO pWineDTO) {
        Wine wine = wineRepository.save(pWineDTO.toWine());
        WineryDTO fromWine = wineryClient.findById(wine.getWineryId());

        return WineDTO.of(wine);
    }

    @GetMapping("/{id}")
    public WineDTO read(@PathVariable("id") final int pId) {
        return  wineRepository.findById(pId)
                .map(wine -> {
                    WineryDTO fromWine = wineryClient.findById(wine.getWineryId());

                    return WineDTO.of(wine);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/")
    public List<WineDTO> getAllWines() {
        return  StreamSupport.stream(wineRepository.findAll().spliterator(), false)
                .map(wine -> {

                    return WineDTO.of(wine);
                })
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public WineDTO update(@PathVariable("id") final int pId, @RequestBody final WineDTO pWineDTO) {
        if (wineRepository.existsById(pId)) {
            pWineDTO.setWineId(pId);
            Wine wine = wineRepository.save(pWineDTO.toWine());
            WineryDTO fromWine = wineryClient.findById(wine.getWineryId());

            return WineDTO.of(wine);
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

    @GetMapping("/colors")
    public List<ColorDTO> getColors() {
        return StreamSupport.stream(colorRepository.findAll().spliterator(), true)
                .map(color -> ColorDTO.of(color))
                .collect(Collectors.toList());
    }
}
