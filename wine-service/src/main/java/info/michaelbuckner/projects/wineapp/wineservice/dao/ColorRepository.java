package info.michaelbuckner.projects.wineapp.wineservice.dao;

import info.michaelbuckner.projects.wineapp.wineservice.model.Color;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends CrudRepository<Color, Integer> {
}
