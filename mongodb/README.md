# Mongo db using docker container

```yml
version: '3'
services:
  my-mongodb:
    image: mongo
    container_name: my-mongodb
    ports:
      - "27017:27017"
    volumes:
      - ~/mongodb_data:/data/db
```
```sh
docker-compose up -d
```
```sh
docker-compose ps
```
```sh
docker-compose down
```