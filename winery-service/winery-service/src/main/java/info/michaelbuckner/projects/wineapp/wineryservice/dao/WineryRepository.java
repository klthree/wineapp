package info.michaelbuckner.projects.wineapp.wineryservice.dao;

import info.michaelbuckner.projects.wineapp.wineryservice.model.Winery;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WineryRepository extends PagingAndSortingRepository<Winery, Integer> {
}
