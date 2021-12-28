package info.michaelbuckner.projects.wineapp.wineservice.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "colors")
@Data
@RequiredArgsConstructor
public class Color {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "color_id")
	private Integer colorId;

	@Column(name = "color_name")
	private String colorName;
}
