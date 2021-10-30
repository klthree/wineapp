package info.michaelbuckner.projects.wineapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "wines")
@Data
@RequiredArgsConstructor
public class Wine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wine_id")
    private Integer wineId;

    @ManyToOne(targetEntity = Winery.class, cascade = {CascadeType.ALL})
    @JoinColumn(name = "winery_id", nullable = false)
    @JsonBackReference
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

    @ManyToMany(targetEntity = Grape.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(
            name = "wines_grapes",
            joinColumns = @JoinColumn(name = "wine_id"),
            inverseJoinColumns = @JoinColumn(name = "grape_id")
    )
//    @JsonManagedReference("grapes_wines")
//    @JsonBackReference("grapes_wines")
//    @EqualsAndHashCode.Exclude
    @JsonIgnoreProperties("wines")
    private List<Grape> grapes;
}
