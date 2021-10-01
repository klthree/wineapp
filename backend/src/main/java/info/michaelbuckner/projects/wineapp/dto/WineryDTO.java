package info.michaelbuckner.projects.wineapp.dto;

import info.michaelbuckner.projects.wineapp.model.Winery;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class WineryDTO {

    private int wineryId;
    private int regionId;
    private String wineryName;

    public Winery toWinery() {
        Winery winery = new Winery();
        winery.setWineryId(wineryId);
        winery.setRegionId(regionId);
        winery.setWineryName(wineryName);

        return winery;
    }

    public static WineryDTO of(Winery winery) {
        final WineryDTO wineryDTO = new WineryDTO();
        wineryDTO.setWineryId(winery.getWineryId());
        wineryDTO.setRegionId(winery.getRegionId());
        wineryDTO.setWineryName(winery.getWineryName());

        return wineryDTO;
    }
}
