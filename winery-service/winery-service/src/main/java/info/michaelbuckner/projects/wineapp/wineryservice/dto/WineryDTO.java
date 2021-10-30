package info.michaelbuckner.projects.wineapp.wineryservice.dto;

import info.michaelbuckner.projects.wineapp.wineryservice.model.Winery;
import lombok.Data;

@Data
public class WineryDTO {

	private Integer winery_id;
	private String winery_name;
	private Integer region_id;

	public Winery toWinery() {
		Winery winery = new Winery();

		winery.setWineryId(getWinery_id());
		winery.setWineryName(getWinery_name());
		winery.setRegionId(getRegion_id());

		return winery;
	}

	public static WineryDTO of(final Winery pWinery) {
		WineryDTO wineryDTO = new WineryDTO();

		wineryDTO.setWinery_id(pWinery.getWineryId());
		wineryDTO.setWinery_name(pWinery.getWineryName());
		wineryDTO.setRegion_id(pWinery.getWineryId());

		return wineryDTO;
	}
}
