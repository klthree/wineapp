package info.michaelbuckner.projects.wineapp.dao;

import info.michaelbuckner.projects.wineapp.model.Winery;
import org.springframework.data.repository.CrudRepository;

public interface WineryRepository extends CrudRepository<Winery, Integer> {
}
