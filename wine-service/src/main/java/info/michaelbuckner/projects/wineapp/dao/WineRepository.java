package info.michaelbuckner.projects.wineapp.dao;

import info.michaelbuckner.projects.wineapp.model.Color;
import info.michaelbuckner.projects.wineapp.model.Wine;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WineRepository extends CrudRepository<Wine, Integer> {
}
