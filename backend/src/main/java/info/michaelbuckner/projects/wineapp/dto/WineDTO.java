package info.michaelbuckner.projects.wineapp.dto;

import info.michaelbuckner.projects.wineapp.model.Grape;
import info.michaelbuckner.projects.wineapp.model.Wine;
import info.michaelbuckner.projects.wineapp.model.Winery;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.Collection;
import java.util.List;
import java.util.Set;

@Data
@RequiredArgsConstructor
public class WineDTO {

    private Integer wineId;
    private String wineryName;
    private String regionName;
    private String wineName;
    private int year;
    private double alcoholPercentage;
    private String color;
    private boolean isSparkling;
    private List<Grape> grapes;

    public Wine toWine() {
        Wine wine = new Wine();

        wine.setWineId(wineId);
        wine.setWineName(wineName);
        wine.setYear(year);
        wine.setAlcoholPercentage(alcoholPercentage);
        wine.setColor(color);
        wine.setSparkling(isSparkling);
        wine.setWinery(winery);
        wine.setGrapes(grapes);

        return wine;
    }

    public static WineDTO of(Wine wine) {
        WineDTO wineDTO = new WineDTO();

        wineDTO.setWineId(wine.getWineId());
        wineDTO.setWinery(wine.getWinery());
        wineDTO.setWineName(wine.getWineName());
        wineDTO.setColor(wine.getColor());
        wineDTO.setYear(wine.getYear());
        wineDTO.setAlcoholPercentage(wine.getAlcoholPercentage());
        wineDTO.setSparkling(wine.isSparkling());
        wineDTO.setGrapes(wine.getGrapes());

        return wineDTO;
    }

}
