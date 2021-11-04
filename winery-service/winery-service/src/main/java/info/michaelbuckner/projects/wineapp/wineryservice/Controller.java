package info.michaelbuckner.projects.wineapp.wineryservice;

import info.michaelbuckner.projects.wineapp.wineryservice.dao.WineryRepository;
import info.michaelbuckner.projects.wineapp.wineryservice.dto.WineryDTO;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/winery/v1")
public class Controller {

	private final WineryRepository wineryRepository;

	@Autowired
	private Controller(final WineryRepository pWineryRepository) {
		wineryRepository = pWineryRepository;
	}

	@PostMapping("/")
	public WineryDTO create(@RequestBody final WineryDTO pWineryDTO) {
		val winery = pWineryDTO.toWinery();
		winery.setWineryId(Integer.MIN_VALUE);

		return WineryDTO.of(wineryRepository.save(winery));
	}

	@GetMapping("/{wineryId}")
	public WineryDTO read(@PathVariable(name = "wineryId") final int pWineryId) {
		return wineryRepository.findById(pWineryId)
				.map(winery -> WineryDTO.of(winery))
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

	@GetMapping("/")
	public List<WineryDTO> readAll() {
		return StreamSupport.stream(wineryRepository.findAll().spliterator(), false)
				.map(winery -> {

					return WineryDTO.of(winery);
				})
				.collect(Collectors.toList());
	}

	@PutMapping("/{wineryId")
	public WineryDTO update(@PathVariable(name = "wineryId") final int pWineryId,
							@RequestBody final WineryDTO pWineryDTO) {
		if (wineryRepository.existsById(pWineryId)) {
			pWineryDTO.setWineryId(pWineryId);
			val winery = pWineryDTO.toWinery();

			return WineryDTO.of(wineryRepository.save(winery));
		}

		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{wineryId}")
	public void delete(@PathVariable(name = "wineryId") final int pWineryId) {
		if (wineryRepository.existsById(pWineryId)) {
			wineryRepository.deleteById(pWineryId);
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/validate")
	public void validate(@RequestBody final WineryDTO pWineryDTO) {

	}
}
