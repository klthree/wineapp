package info.michaelbuckner.projects.wineapp.wineryservice.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.data.annotation.Id;

import javax.persistence.*;

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

}

