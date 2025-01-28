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
    nomCP          VARCHAR(256) NOT NULL,
    Fecha_creacion DATE NOT NULL,
    observaciones  VARCHAR(2048) NOT NULL
);

CREATE TABLE TAlumno(
    Codigo_alumno   VARCHAR(16) PRIMARY KEY,
    AP              VARCHAR(256) NOT NULL,
    Nom             VARCHAR(512) NOT NULL,
    edad            INT NOT NULL,
    sexo            CHAR(1) NOT NULL,
    peso            DECIMAL(5,2) NOT NULL,
    talla           INT NOT NULL, -- centimetro
    color           VARCHAR(128) NOT NULL,
    prov            VARCHAR(256) NOT NULL,
    cod_cp          BIGINT REFERENCES TCarreraProfesional(codigoCP) NOT NULL,
    fecha_ingreso_U DATE NOT NULL
);
