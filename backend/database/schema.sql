BEGIN TRANSACTION;

DROP TABLE IF EXISTS regions_grapes;
DROP TABLE IF EXISTS wines_grapes;
DROP TABLE IF EXISTS grapes;
DROP TABLE IF EXISTS wines;
DROP TABLE IF EXISTS wineries;
DROP TABLE IF EXISTS subregions;
DROP TABLE IF EXISTS regions;

DROP TYPE IF EXISTS DEGREE;
DROP TYPE IF EXISTS WEIGHT;
DROP TYPE IF EXISTS WINE_COLOR;

DROP SEQUENCE IF EXISTS seq_wine_id;
DROP SEQUENCE IF EXISTS seq_winery_id;
DROP SEQUENCE IF EXISTS seq_grape_id;
DROP SEQUENCE IF EXISTS seq_region_id;
DROP SEQUENCE IF EXISTS seq_winery_grape_id;
DROP SEQUENCE IF EXISTS seq_subregion_id;

CREATE SEQUENCE seq_wine_id
    START 1000
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_winery_id
    START 2000
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_grape_id
    START 3000
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_region_id
    START 4000
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_subregion_id
    START 5000
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE TYPE DEGREE AS ENUM ('Low', 'Medium', 'High');
CREATE TYPE WEIGHT AS ENUM ('Light', 'Medium', 'Full');
CREATE TYPE WINE_COLOR AS ENUM ('Red', 'White', 'Rose');

CREATE TABLE regions (
    region_id INT DEFAULT nextval('seq_region_id') PRIMARY KEY,
    region_name TEXT NOT NULL
);

CREATE TABLE subregions (
    subregion_id INT DEFAULT nextval('seq_subregion_id') PRIMARY KEY,
    region_id INT,

    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id)
);

CREATE TABLE wineries (
    winery_id INT DEFAULT nextval('seq_winery_id') PRIMARY KEY,
    winery_name TEXT NOT NULL,
    region_id INT,

    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id)
);

CREATE TABLE wines (
    wine_id INT DEFAULT nextval('seq_wine_id') PRIMARY KEY,
    winery_id INT,
    wine_name TEXT,
    year INT CHECK (year > 1800),
    price DECIMAL,
    buy_again BOOLEAN DEFAULT FALSE NOT NULL,
    acidity DEGREE,
    sweetness DEGREE,
    tannin DEGREE,
    body WEIGHT,
    alcohol_percentage DECIMAL(5, 2) CHECK (alcohol_percentage > 0 AND alcohol_percentage < 100),
    color WINE_COLOR NOT NULL,
    sparkling BOOLEAN DEFAULT FALSE NOT NULL,
    tasting_notes TEXT,

    CONSTRAINT fk_winery FOREIGN KEY(winery_id) REFERENCES wineries(winery_id)
);

CREATE TABLE grapes (
    grape_id INT DEFAULT nextval('seq_grape_id') PRIMARY KEY,
    grape_name TEXT
);

CREATE TABLE regions_grapes (
    grape_id INT,
    region_id INT,

    CONSTRAINT fk_grape FOREIGN KEY(grape_id) REFERENCES grapes(grape_id),
    CONSTRAINT fk_region FOREIGN KEY(region_id) REFERENCES regions(region_id)
);

CREATE TABLE wines_grapes (
    wine_id INT,
    grape_id INT,
    percentage DECIMAL(5, 2) CHECK (percentage > 0 AND percentage < 100),

    CONSTRAINT fk_wine FOREIGN KEY(wine_id) REFERENCES wines(wine_id),
    CONSTRAINT fk_grape FOREIGN KEY(grape_id) REFERENCES grapes(grape_id)
);

COMMIT TRANSACTION;