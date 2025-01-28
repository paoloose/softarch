use std::env;
use std::thread::available_parallelism;

pub async fn create_pool() -> Result<sqlx::postgres::PgPool, Box<dyn std::error::Error>> {
    let db_url = env::var("DATABASE_URL")?;

    let pool = sqlx::postgres::PgPoolOptions::new()
        .acquire_timeout(std::time::Duration::from_secs(15))
        .max_connections(available_parallelism().unwrap().get() as u32)
        .connect(&db_url)
        .await?;

    Ok(pool)
}
