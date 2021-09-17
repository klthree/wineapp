package info.michaelbuckner.projects.wineapp.dto;

import lombok.AllArgsConstructor;

import java.math.BigDecimal;

public class WineDTO {
    private int wineId;
    private int wineryId;
    private String wineName;
    private int year;
    private BigDecimal price;
    private boolean buyAgain;
    private String acidity;
    private String sweetness;
    private String tannin;
    private String body;
    private double alcoholPercentage;
    private String color;
    private boolean sparkling;
    private String tastingNotes;

    private List<String> grapes;
}
