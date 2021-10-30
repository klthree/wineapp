package info.michaelbuckner.projects.wineapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

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

    @ManyToMany(targetEntity = Wine.class, mappedBy = "grapes")
//    @JsonBackReference("grapes_wines")
//    @JsonManagedReference("grapes_wines")
    @JsonIgnoreProperties("grapes")
    private List<Wine> wines;
}
