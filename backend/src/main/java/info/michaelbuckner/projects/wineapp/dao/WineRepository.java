package info.michaelbuckner.projects.wineapp.dao;

import info.michaelbuckner.projects.wineapp.model.Wine;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface WineRepository extends PagingAndSortingRepository<Wine, Integer> {


}
