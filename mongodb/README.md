# Mongo db 

# 1. Using a docker container for local environment

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

# 2. Using MondoDB Atlas to host and manage the data in the cloud

https://www.mongodb.com/docs/atlas/getting-started/

Install [dnspython](https://pypi.org/project/dnspython/) to perform the connection

```
pip install dnspython
```