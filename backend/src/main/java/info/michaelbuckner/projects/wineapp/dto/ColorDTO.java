package info.michaelbuckner.projects.wineapp.dto;

import info.michaelbuckner.projects.wineapp.model.Color;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.val;

@Data
@RequiredArgsConstructor
public class ColorDTO {
	private Integer colorId;
	private String colorName;

	public Color toColor() {
		Color color = new Color();

		color.setColorId(colorId);
		color.setColorName(colorName);

		return color;
	}

	public static ColorDTO of(final Color pColor) {
		val colorDTO = new ColorDTO();

		colorDTO.setColorId(pColor.getColorId());
		colorDTO.setColorName(pColor.getColorName());

		return colorDTO;
	}
}
