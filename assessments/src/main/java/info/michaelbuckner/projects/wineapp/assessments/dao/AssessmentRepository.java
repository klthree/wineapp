package info.michaelbuckner.projects.wineapp.assessments.dao;

import info.michaelbuckner.projects.wineapp.assessments.model.Assessment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AssessmentRepository extends CrudRepository<Assessment, Integer> {

    @Query(value = "SELECT * FROM assessments WHERE wine_id = :pWineId", nativeQuery = true)
    public Optional<Assessment> getAssessmentByWineId(final int pWineId);
}
