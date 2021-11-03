package info.michaelbuckner.projects.wineapp.dto;

import info.michaelbuckner.projects.wineapp.model.Wine;
import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor
public class WineDTO {

    private Integer wineId;
    private Integer wineryId;
    private String wineName;
    private Integer year;
    private Double alcoholPercentage;
    private Integer colorId;
    private Boolean isSparkling;
//    private List<Grape> grapes;

    public Wine toWine() {
        Wine wine = new Wine();

        wine.setWineId(wineId);
        wine.setWineryId(wineryId);
        wine.setWineName(wineName);
        wine.setYear(year);
        wine.setAlcoholPercentage(alcoholPercentage);
        wine.setColorId(colorId);
        wine.setIsSparkling(isSparkling);
//        wine.setGrapes(grapes);

        return wine;
    }

    public static WineDTO of(final Wine pWine) {
        WineDTO wineDTO = new WineDTO();

        wineDTO.setWineId(pWine.getWineId());
        wineDTO.setWineName(pWine.getWineName());
        wineDTO.setYear(pWine.getYear());
        wineDTO.setColorId(pWine.getColorId());
        wineDTO.setAlcoholPercentage(pWine.getAlcoholPercentage());
        wineDTO.setIsSparkling(pWine.getIsSparkling());

        return wineDTO;
    }
}
