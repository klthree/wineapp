package info.michaelbuckner.projects.wineapp.wineservice.dto;

import lombok.*;

@Data
@RequiredArgsConstructor
public class WineryDTO {

    private Integer wineryId;
    private String wineryName;
    private String regionName;
    private String subregionName;
}
