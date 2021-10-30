package info.michaelbuckner.projects.wineapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "wineries", uniqueConstraints = @UniqueConstraint(columnNames = {"winery_name"}))
@Data
@RequiredArgsConstructor
public class Winery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "winery_id")
    private Integer wineryId;

    @Column(name = "winery_name")
    private String wineryName;

    @Column(name = "region_id")
    private Integer regionId;

    @OneToMany(targetEntity = Wine.class, mappedBy = "winery")
//    @JsonBackReference
    @JsonManagedReference
//    @EqualsAndHashCode.Exclude
    private List<Wine> wines;
}
