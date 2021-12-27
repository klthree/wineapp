package info.michaelbuckner.projects.wineapp.dao;

import info.michaelbuckner.projects.wineapp.model.Color;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends CrudRepository<Color, Integer> {
}
