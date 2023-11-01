#!/bin/bash

# Pull the latest images from Docker Hub
docker pull gab020/vite-react:latest
docker pull gab020/flaskimg:latest

# Run Docker Compose with a fresh build
docker-compose up -d --build

# Stop Docker Compose
# docker-compose down ...
