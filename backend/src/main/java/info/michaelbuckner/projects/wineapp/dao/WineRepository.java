package info.michaelbuckner.projects.wineapp.dao;

import info.michaelbuckner.projects.wineapp.model.Wine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WineRepository extends PagingAndSortingRepository<Wine, Integer> {


}
