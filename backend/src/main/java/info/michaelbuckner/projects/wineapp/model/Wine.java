package info.michaelbuckner.projects.wineapp.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "wines")
public class Wine {

    @Id
    @Column(name = "wine_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int wineId;

    @ManyToOne
    @JoinColumn(name = "winery_id", nullable = false)
    private Winery winery;

    @Column(name = "wine_name")
    private String wineName;

    @Column(name = "year")
    private int year;

    @Column(name = "alcohol_percentage")
    private double alcoholPercentage;

    @Column(name = "color")
    private String color;

    @Column(name = "is_sparkling")
    private boolean isSparkling;
}
