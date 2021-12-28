package info.michaelbuckner.projects.wineapp.wineservice.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "grapes")
@Data
@RequiredArgsConstructor
public class Grape {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grape_id")
    private Integer grapeId;

    @Column(name = "grape_name")
    private String grapeName;

    @Column(name = "region_id")
    private Integer regionId;
}
