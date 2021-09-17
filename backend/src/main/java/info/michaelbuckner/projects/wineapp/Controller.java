package info.michaelbuckner.projects.wineapp;

import info.michaelbuckner.projects.wineapp.dto.WineDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/taster/v1")
public class Controller {

    @PostMapping("/")
    public WineDTO create(@RequestBody final WineDTO pWineDTO) {
        return null;
    }

    @GetMapping("/{id}")
    public WineDTO read(@PathVariable("id") final int pId) {
        return null;
    }

    @PutMapping("/{id}")
    public WineDTO update(@PathVariable("id") final int pId, @RequestBody final WineDTO pWineDTO) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") final int pId) {

    }
}
