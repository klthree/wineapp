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

    @Query(value = "SELECT region_id FROM regions WHERE region_name = :pRegionName", nativeQuery = true)
    public Optional<Integer> getRegionIdByName(final String pRegionName);

    @Query(value = "SELECT region_name FROM regions WHERE region_id = :pRegionId", nativeQuery = true)
    public Optional<String> getRegionNameById(final Integer pRegionId);

    @Query(value = "SELECT subregion_id FROM subregions WHERE subregion_name = :pSubregionName", nativeQuery = true)
    public Optional<Integer> getSubregionIdByName(final String pSubregionName);

    @Query(value = "SELECT subregion_name FROM subregions WHERE subregion_id = :pSubregionId", nativeQuery = true)
    public Optional<String> getSubregionNameById(final Integer pSubregionId);
}
