package info.michaelbuckner.projects.wineapp.model;

import info.michaelbuckner.projects.wineapp.client.WineryClient;
import info.michaelbuckner.projects.wineapp.dao.WineRepository;
import info.michaelbuckner.projects.wineapp.dto.WineDTO;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Table(name = "wines")
@Data
@RequiredArgsConstructor
public class Wine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wine_id")
    private Integer wineId;

    @Column(name = "winery_id")
    private Integer wineryId;

    @Column(name = "wine_name")
    private String wineName;

    @Column(name = "year")
    private Integer year;

    @Column(name = "alcohol_percentage")
    private Double alcoholPercentage;

    @Column(name = "color_id")
    private Integer colorId;

    @Column(name = "is_sparkling")
    private Boolean isSparkling;

    public WineDTO toWineDTO() {
        WineDTO wineDTO = new WineDTO();

        wineDTO.setWineId(wineId);
        wineDTO.setWineName(wineName);
        wineDTO.setColorId(colorId);
        wineDTO.setYear(year);
        wineDTO.setAlcoholPercentage(alcoholPercentage);
        wineDTO.setIsSparkling(isSparkling);

        return wineDTO;
    }
}
