package info.michaelbuckner.projects.wineapp.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "grapes")
@Data
public class Grape {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "grape_id")
    private int grapeId;

    @Column(name = "grape_name")
    private String grapeName;

    @Column(name = "region_id")
    private int regionId;
}
