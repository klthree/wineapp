BEGIN TRANSACTION;

DROP TABLE IF EXISTS wines_grapes;
DROP TABLE IF EXISTS regions_grapes;
DROP TABLE IF EXISTS grapes;
DROP TABLE IF EXISTS wines;
DROP TABLE IF EXISTS wineries;
DROP TABLE IF EXISTS subregions;
DROP TABLE IF EXISTS regions;
DROP TABLE IF EXISTS assessments;

DROP SEQUENCE IF EXISTS seq_wine_id;
DROP SEQUENCE IF EXISTS seq_winery_id;
DROP SEQUENCE IF EXISTS seq_grape_id;
DROP SEQUENCE IF EXISTS seq_region_id;
DROP SEQUENCE IF EXISTS seq_wine_grape_id;
DROP SEQUENCE IF EXISTS seq_subregion_id;
DROP SEQUENCE IF EXISTS seq_assessment_id;
DROP SEQUENCE IF EXISTS seq_region_grape_id;

CREATE SEQUENCE seq_wine_id
    START 10000
    INCREMENT BY 1
    MINVALUE 10000
    MAXVALUE 19999
    CACHE 1;

CREATE SEQUENCE seq_winery_id
    START 20000
    INCREMENT BY 1
    MINVALUE 20000
    MAXVALUE 29999
    CACHE 1;

CREATE SEQUENCE seq_grape_id
    START 30000
    INCREMENT BY 1
    MINVALUE 30000
    MAXVALUE 39999
    CACHE 1;

CREATE SEQUENCE seq_region_id
    START 40000
    INCREMENT BY 1
    MINVALUE 40000
    MAXVALUE 49999
    CACHE 1;

CREATE SEQUENCE seq_subregion_id
    START 50000
    INCREMENT BY 1
    MINVALUE 50000
    MAXVALUE 59999
    CACHE 1;

CREATE SEQUENCE seq_assessment_id
    START 60000
    INCREMENT BY 1
    MINVALUE 60000
    MAXVALUE 69999;

CREATE SEQUENCE seq_wine_grape_id
    START 70000
    INCREMENT BY 1
    MINVALUE 70000
    MAXVALUE 79999;

CREATE SEQUENCE seq_region_grape_id
    START 80000
    INCREMENT BY 1
    MINVALUE 80000
    MAXVALUE 89999;

CREATE TABLE regions (
    region_id INT DEFAULT nextval('seq_region_id') PRIMARY KEY,
    region_name TEXT NOT NULL UNIQUE
);

CREATE TABLE subregions (
    subregion_id INT DEFAULT nextval('seq_subregion_id') PRIMARY KEY,
    region_id INT NOT NULL,
    subregion_name TEXT NOT NULL UNIQUE,

    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id)
);

CREATE TABLE wineries (
    winery_id INT DEFAULT nextval('seq_winery_id') PRIMARY KEY,
    winery_name TEXT NOT NULL UNIQUE,
    region_id INT,

    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id)
);

CREATE TABLE wines (
    wine_id INT DEFAULT nextval('seq_wine_id') PRIMARY KEY,
    winery_id INT,
    wine_name TEXT,
    year INT CHECK (year > 1800),
    alcohol_percentage DECIMAL(5, 2) CHECK (alcohol_percentage > 0 AND alcohol_percentage < 100),
    color TEXT NOT NULL,
    is_sparkling BOOLEAN DEFAULT FALSE NOT NULL,

    UNIQUE (winery_id, wine_name, year),
    CONSTRAINT fk_winery FOREIGN KEY(winery_id) REFERENCES wineries(winery_id)
);

CREATE TABLE grapes (
    grape_id INT DEFAULT nextval('seq_grape_id') PRIMARY KEY,
    grape_name TEXT,
    region_id INT,

    UNIQUE(grape_name, region_id),
    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id)
);

CREATE TABLE wines_grapes (
    wine_grape_id INT DEFAULT nextval('seq_wine_grape_id') PRIMARY KEY,
    wine_id INT,
    grape_id INT,
    percentage DECIMAL(5, 2) CHECK (percentage > 0 AND percentage < 100),

    UNIQUE(wine_id, grape_id),
    CONSTRAINT fk_wine FOREIGN KEY(wine_id) REFERENCES wines(wine_id),
    CONSTRAINT fk_grape FOREIGN KEY(grape_id) REFERENCES grapes(grape_id)
);

CREATE TABLE regions_grapes (
    region_grape_id INT DEFAULT nextval('seq_region_grape_id') PRIMARY KEY,
    region_id INT,
    grape_id INT,

    UNIQUE(region_id, grape_id),
    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id),
    CONSTRAINT fk_grape FOREIGN KEY(grape_id) REFERENCES grapes(grape_id)
);

CREATE TABLE assessments (
    assessment_id INT DEFAULT nextval('seq_assessment_id') PRIMARY KEY,
    price DECIMAL,
    acidity INT CHECK(acidity > 0 AND acidity < 6),
    sweetness INT CHECK(sweetness > 0 AND sweetness < 6),
    tannin INT CHECK(tannin > 0 AND tannin < 6),
    burn INT CHECK(burn > 0 AND burn < 6),
    body INT CHECK(body > 0 AND body < 4),
    buy_again BOOLEAN DEFAULT FALSE NOT NULL,
    sight_description TEXT,
    smell_description TEXT,
    taste_description TEXT,
    final_assessment TEXT
);

COMMIT TRANSACTION;