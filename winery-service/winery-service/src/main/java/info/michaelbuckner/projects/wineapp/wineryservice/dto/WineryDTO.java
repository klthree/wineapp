package info.michaelbuckner.projects.wineapp.wineryservice.dto;

import info.michaelbuckner.projects.wineapp.wineryservice.dao.WineryRepository;
import info.michaelbuckner.projects.wineapp.wineryservice.model.Winery;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class WineryDTO {

	private Integer wineryId;
	private String wineryName;
	private Integer regionId;
	private Integer subregionId;

	public Winery toWinery() {
		Winery winery = new Winery();

		winery.setWineryId(getWineryId());
		winery.setWineryName(getWineryName());
		winery.setRegionId(regionId);
		winery.setSubregionId(subregionId);

		return winery;
	}

	public static WineryDTO of(final Winery pWinery) {
		WineryDTO wineryDTO = new WineryDTO();

		wineryDTO.setWineryId(pWinery.getWineryId());
		wineryDTO.setWineryName(pWinery.getWineryName());
		wineryDTO.setRegionId(pWinery.getRegionId());
		wineryDTO.setSubregionId(pWinery.getSubregionId());

		return wineryDTO;
	}
}
