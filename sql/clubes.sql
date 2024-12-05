CREATE TABLE clube
(
    id              serial PRIMARY KEY,
    name            varchar(40) NOT NULL,
    closed          boolean,
    year_revenue    double precision,
    foundation_year integer
);

INSERT INTO clube (name, closed, year_revenue, foundation_year)
VALUES ('Grêmio', false, 2.5, 1903), ('Internacional', true, 1.2, 2006);

SELECT * from clube;
