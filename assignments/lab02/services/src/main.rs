use bigdecimal::ToPrimitive;
use sqlx::types::time::Date;
use sqlx::PgPool;
use std::collections::HashMap;
use time::macros::format_description;
use tonic::{transport::Server, Request, Response, Status};

use unmsm_service::students_server::{Students, StudentsServer};
use unmsm_service::{
    Career, CountStudentsByCareerResponse, GetAllCareersResponse, ListFilteredStudentsRequest,
    ListFilteredStudentsResponse, ListStudentsByCareerRequest, ListStudentsByCareerResponse,
    Student,
};

mod db;

pub mod unmsm_service {
    tonic::include_proto!("unmsm_service");
}

pub struct StudentsService {
    pool: PgPool,
}

impl StudentsService {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }
}

#[tonic::async_trait]
impl Students for StudentsService {
    async fn get_all_careers(
        &self,
        _: Request<()>,
    ) -> Result<Response<GetAllCareersResponse>, Status> {
        let db_careers = sqlx::query!("SELECT * FROM tcarreraprofesional")
            .fetch_all(&self.pool)
            .await
            .map_err(|_| Status::internal("Error fetching careers"))?;

        let careers = db_careers.iter().map(|c| Career {
            id: c.codigocp,
            creation_date: c.fecha_creacion.to_string(),
            name: c.nomcp.clone(),
            observations: c.observaciones.clone(),
        });

        Ok(Response::new(GetAllCareersResponse {
            careers: careers.collect(),
        }))
    }

    async fn count_students_by_career(
        &self,
        _: Request<()>,
    ) -> Result<Response<CountStudentsByCareerResponse>, Status> {
        let count_by_career = sqlx::query!("SELECT cod_cp, count(*) FROM talumno GROUP BY cod_cp;")
            .fetch_all(&self.pool)
            .await
            .map_err(|_| Status::internal("Error fetching careers"))?;

        let mut count_map = HashMap::<i64, i32>::with_capacity(100);

        count_by_career.iter().for_each(|c| {
            count_map.insert(c.cod_cp, c.count.unwrap() as i32);
        });

        Ok(Response::new(CountStudentsByCareerResponse {
            career_student_count: count_map,
        }))
    }

    async fn list_students_by_career(
        &self,
        request: Request<ListStudentsByCareerRequest>,
    ) -> Result<Response<ListStudentsByCareerResponse>, Status> {
        let career_id = request.into_inner().career_id;

        let students = sqlx::query!("select * from talumno where cod_cp = $1", career_id)
            .fetch_all(&self.pool)
            .await
            .map_err(|_| Status::internal("Error fetching students"))?;

        let students = students.iter().map(|s| Student {
            student_code: s.codigo_alumno.clone(),
            name: s.nom.clone(),
            surname: s.ap.clone(),
            career_id: s.cod_cp,
            age: s.edad,
            height: s.talla,
            enroll_date: s.fecha_ingreso_u.to_string(),
            favorite_color: s.color.clone(),
            gender: s.sexo.clone(),
            province: s.prov.clone(),
            weight: s.peso.to_f32().unwrap(),
        });

        Ok(Response::new(ListStudentsByCareerResponse {
            students: students.collect(),
        }))
    }

    async fn list_filtered_students(
        &self,
        request: Request<ListFilteredStudentsRequest>,
    ) -> Result<Response<ListFilteredStudentsResponse>, Status> {
        let request = request.into_inner();
        let format = format_description!("[year]-[month]-[day]");
        let start_date: Date = Date::parse(request.start_date.as_str(), &format).unwrap();
        let exclude_color = request.exclude_fav_color;
        let min_age = request.min_age;
        let max_age = request.max_age;

        let students = sqlx::query!("SELECT * FROM talumno WHERE fecha_ingreso_u > $1 and color != $2 and edad >= $3 and edad <= $4",
            start_date,
            exclude_color,
            min_age,
            max_age,
        ).fetch_all(&self.pool)
        .await
        .map_err(|_| Status::internal("Error fetching students"))?;

        let students = students.iter().map(|s| Student {
            student_code: s.codigo_alumno.clone(),
            name: s.nom.clone(),
            surname: s.ap.clone(),
            career_id: s.cod_cp,
            age: s.edad,
            height: s.talla,
            enroll_date: s.fecha_ingreso_u.to_string(),
            favorite_color: s.color.clone(),
            gender: s.sexo.clone(),
            province: s.prov.clone(),
            weight: s.peso.to_f32().unwrap(),
        });

        Ok(Response::new(ListFilteredStudentsResponse {
            students: students.collect(),
        }))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();
    let addr = "0.0.0.0:50051".parse().unwrap();

    let pool = db::create_pool().await?;

    let greeter = StudentsService::new(pool);

    println!("UNMSM service listening on {}", addr);

    Server::builder()
        .add_service(StudentsServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}
