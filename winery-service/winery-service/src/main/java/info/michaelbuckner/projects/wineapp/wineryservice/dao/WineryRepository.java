package info.michaelbuckner.projects.wineapp.wineryservice.dao;

import info.michaelbuckner.projects.wineapp.wineryservice.model.Winery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WineryRepository extends PagingAndSortingRepository<Winery, Integer> {

    @Query(value = "SELECT * FROM wineries WHERE winery_name = :pWineryName", nativeQuery = true)
    public Optional<Winery> existsByName(final String pWineryName);
}
