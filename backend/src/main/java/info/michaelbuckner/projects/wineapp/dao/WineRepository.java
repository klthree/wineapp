package info.michaelbuckner.projects.wineapp.dao;

import info.michaelbuckner.projects.wineapp.model.Wine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WineRepository extends CrudRepository<Wine, Integer> {

}
