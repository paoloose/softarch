/*
Se definen las siguientes tablas y su equivalente en SQL

TAlumno (
    Código_alumno,
    AP,
    Nom,
    edad,
    sexo,
    peso,
    talla,
    color,
    prov,
    cod_cp,
    fecha_ingreso_U
)

TCarreraProfesional(
    codigoCP,
    nomCP,
    Fecha_creacion,
    observaciones
)*/


CREATE TABLE TCarreraProfesional(
    codigoCP       BIGSERIAL PRIMARY KEY,
    nomCP          VARCHAR(256),
    Fecha_creacion DATE,
    observaciones  VARCHAR(2048)
);

CREATE TABLE TAlumno(
    Codigo_alumno   VARCHAR(16) PRIMARY KEY,
    AP              VARCHAR(256),
    Nom             VARCHAR(512),
    edad            INT,
    sexo            CHAR(1),
    peso            DECIMAL(5,2),
    talla           INT, -- centimetros
    color           VARCHAR(128),
    prov            VARCHAR(256),
    cod_cp          BIGINT REFERENCES TCarreraProfesional(codigoCP),
    fecha_ingreso_U DATE
);
