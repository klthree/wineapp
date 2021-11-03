package info.michaelbuckner.projects.wineapp.client;

import info.michaelbuckner.projects.wineapp.dto.WineryDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "WineryClient", url = "${winery.host}")
public interface WineryClient {

	@GetMapping("/winery/v1/{wineryId}")
	public WineryDTO findById(@PathVariable("wineryId") final int pWineryId);
}
