FROM postgres:17.2-alpine

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=nopass
ENV POSTGRES_DB=lab02

EXPOSE 5432

COPY tables.sql /docker-entrypoint-initdb.d/01_tables.sql
COPY carreras.sql /docker-entrypoint-initdb.d/02_carreras.sql
COPY alumnos.sql /docker-entrypoint-initdb.d/03_alumnos.sql
