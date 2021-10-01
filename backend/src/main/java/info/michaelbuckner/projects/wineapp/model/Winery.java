package info.michaelbuckner.projects.wineapp.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "wineries")
@Data
public class Winery {

    @Column(name = "winery_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int wineryId;

    @Column(name = "winery_name")
    private String wineryName;

    @Column(name = "region_id")
    private int regionId;

    @OneToMany(mappedBy = "winery")
    private Set<Wine> wines;
}
