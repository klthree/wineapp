package info.michaelbuckner.projects.wineapp.assessments.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="assessments")
@Data
@RequiredArgsConstructor
public class Assessment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assessment_id")
    private int assessmentId;

    @Column(name = "wine_id")
    private int wineId;

    @Column(name = "acidity")
    private int acidity;

    @Column(name = "sweetness")
    private int sweetness;

    @Column(name = "tannin")
    private int tannins;

    @Column(name = "burn")
    private int burn;

    @Column(name = "body")
    private int body;

    @Column(name = "price")
    private double price;

    @Column(name = "sight_description")
    private String visualDesc;

    @Column(name = "smell_description")
    private String olfactoryDesc;

    @Column(name = "taste_description")
    private String tasteDesc;

    @Column(name = "final_assessment")
    private String finalAssessment;

    @Column(name = "buy_again")
    private boolean buyAgain;
}
