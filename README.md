# Alquivago

![Alquivago - Logo](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/logo/alquivago_logo_v1-enhanced.png?raw=true)

__Alquivago__ is a web application that compares `long-term` house/apartment `rental prices` from three different sources (websites) in Montevideo - Uruguay.

## Table of contents

- [Scope](#scope)
    - [Problem to solve](#problem-to-solve)
    - [Out of the scope](#out-of-the-scope)
- [Project planning](#project-planning)
- [Features](#features)
    - [Rentals List View](#rentals-list-view)
    - [Rentals Comparison](#data-comparison)
    - [Rentals Geolocalization](#rentals-geolocalization)
- [Live Application](#live-application)
    - [Frontend - User Interface](#frontend---user-interface)
    - [Backend - Internal API](#backend--internal--api)
    - [Map View](#map-view)
- [Run in local environment](#run-in-local-environment)
    - [Prerequisites](#prerequisites)
    - [Run docker compose](#run-docker-compose)
- [Architecture](#architecture)
    - [Model](#model)
    - [View](#view)
    - [Controller](#controller)
- [Technologies and Tools](#technologies)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Web Scraping](#web-scraping)
    - [Deployment](#deployment)
    - [Other tools](#other-tools)
- [Future Improvements](#future-improvements)
- [Authors](#authors)

## Scope

### Problem to solve

__Finding a house or apartment for rent for long-term periods of time__ is a very tedious task. This is because there are many possible sources from which to extract information, with each of them containing a large number of properties. Each website presents the data in different formats making it difficult to compare the different options.

### Out of the scope

The technical term to refer to the project is like a `meta-search engine focussed on house/apartment rents`, this kind of software is specialized in helping users search for and compare options across different providers but `doesn't handle the renting process directly`.

AlquiVago is in charge of `listing and filtering all the available rental options` (houses or apartments), and then proportionate a link and redirect the user to the original site.

## Project planning

## Features

### Rentals List View

![Rentals List View](/landing_page/assets/funcionalidades/filtro.gif)

### Rentals Comparison

![Rentals Comparison](/landing_page/assets/funcionalidades/comparar.gif)


### Rentals Geolocalization

![Rentals Geolocalization](/landing_page/assets/funcionalidades/mapa.gif)

## Live Application

### Frontend - User Interface

[Frontend - User Interface](https://alquivago.vercel.app/)

![Frontend - User Interface](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/live-demo/frontend_demo.png?raw=true)

### Map View

[Map View](https://cristian-encalada.github.io/Alquivago/)


![Map View](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/live-demo/map_view_demo.png?raw=true)


## Run in local environment

### Prerequisites

### Run docker compose

## Architecture

![Alquivago - MVC Architecture](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/archtecture_diagram/Alquivago_MVC_diagram.png?raw=true)

This project uses a MVC (Model-View-Controller) Architecture.

### Model:

This represents the application's data and the __business logic for manipulating that data__. 

In the actual project context, the Model layer would include the code responsible for interacting with your NoSQL MongoDB database. It handles tasks such as data retrieval, storage, validation, and manipulation. It's where we define the structure of the data, such as schemas for the MongoDB collections.

### View

The View layer is responsible for __presenting data to the user__. In a web application, this typically includes HTML templates or components that render the user interface. 

In our case, as we use React on the frontend, the React components belong to the View category.

### Controller

The Controller acts as an __intermediary between the Model and the View__. It receives requests from the client, processes them, interacts with the Model to retrieve or modify data, and then sends the appropriate response back to the client. 

In this project, on the Flask application, the Flask routes (API endpoints) and associated functions would act as controllers. They handle incoming HTTP requests, call the necessary Model methods to perform operations on the data, and return responses,  in the form of JSON for a RESTful API.

## Technologies and Tools

### Frontend

- __Figma__ - Design tool 
- __Vite__ - Frontend tool 
- __React__ - Front-end JavaScript library
- __Tailwind CSS__ - CSS framework

### Backend

- __Flask__ - Python Framework

### Database

- __MongoDB__ - No SQL database

### Web Scraping

- __Selenium__ - Browser automation tool
- __BeautifulSoup__ - Python library

### Deployment

- __Vercel__ - Vite/React app and Flask API
- __Github Pages__ - Map View
- __Atlas__ - Mongo DB

### Other tools

- __Trello__ - Tasks tracking and project management
    - ([Trello Board URL](https://trello.com/b/9ktgFcQo/holberton-final-project-alquivago))
- __Apache Airflow__ - Automate scraping process
- __Github Actions__ - Automate Dockerhub upload process
- __Docker__ - Local Environment

## Future Improvements

Some of the possible future improvements are:

- Scale the system outside of Montevideo, to other Uruguay Departments.
- Additionally to rentals, manage house/apartments to buy.
- Automate the control of duplicated data.

## Authors

- [Cristian Encalada](https://github.com/cristian-encalada) 
    - Project Manager
        - Full-stack developer 
- [Martin Leiro](https://github.com/hentype85)
    - Web Scraper
        - Back-end developer
- [Emiliano Garin](https://github.com/EmilianoGarin)
    - API Manager
        - Back-end developer
- [Gabriel Delgado](https://github.com/Gabr1el20)
    - UX/UI Designer
        - Full-stack developer 
- [Alejandro Martinez](https://github.com/Gabr1el20)
    - UX/UI Designer
        - Front-end developer 