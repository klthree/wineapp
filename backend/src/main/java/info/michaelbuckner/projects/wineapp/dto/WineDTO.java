package info.michaelbuckner.projects.wineapp.dto;

import info.michaelbuckner.projects.wineapp.model.Wine;
import info.michaelbuckner.projects.wineapp.model.Winery;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class WineDTO {

    private int wineId;
    private int wineryId;
    private String wineName;
    private int year;
    private double alcoholPercentage;
    private String color;
    private boolean iSparkling;
    private List<String> grapes;

    public Wine toWine() {
        Wine wine = new Wine();
        wine.setWineId(wineId);
        wine.setWineName(wineName);
        wine.setYear(year);
        wine.setAlcoholPercentage(alcoholPercentage);
        wine.setColor(color);
        wine.setSparkling(iSparkling);
        wine.setWineryId(wineryId);

        return wine;
    }

    public static WineDTO of(Wine wine) {
        WineDTO wineDTO = new WineDTO();

        wineDTO.setWineId(wine.getWineId());
        wineDTO.setWineryId(wine.getWineryId());
        wineDTO.setWineName(wine.getWineName());
        wineDTO.setColor(wine.getColor());
        wineDTO.setYear(wine.getYear());
        wineDTO.setAlcoholPercentage(wine.getAlcoholPercentage());
        wineDTO.setISparkling(wine.isSparkling());

        return wineDTO;
    }
}
