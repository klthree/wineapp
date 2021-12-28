package info.michaelbuckner.projects.wineapp.wineservice.dao;

import info.michaelbuckner.projects.wineapp.wineservice.model.Wine;
import org.springframework.data.repository.CrudRepository;
import info.michaelbuckner.projects.wineapp.wineservice.model.Color;
import org.springframework.stereotype.Repository;

@Repository
public interface WineRepository extends CrudRepository<Wine, Integer> {
}
