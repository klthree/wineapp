package info.michaelbuckner.projects.wineapp.wineryservice.service;

import info.michaelbuckner.projects.wineapp.wineryservice.dao.WineryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegionService {

	@Autowired
	private WineryRepository wineryRepository;

	public Integer getRegionIdFromName(final String pName) {
		return wineryRepository.getRegionIdByName(pName).orElse(-1);
	}

	public Integer getSubregionIdFromName(final String pName) {
		return wineryRepository.getSubregionIdByName(pName).orElse(-1);
	}

	public String getRegionNameById(final int pId) {
		return wineryRepository.getRegionNameById(pId).orElse("There is no region associated with this Id");
	}

	public String getSubregionNameById(final int pId) {
		return wineryRepository.getSubregionNameById(pId).orElse("There is no region associated with this Id");
	}
}
