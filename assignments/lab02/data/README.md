# Data layer

To start the container, in the parent directory, run

```bash
docker compose up --build
```

And now you can connect to the database

```bash
psql 'postgres://user:nopass@localhost/lab02'
```
