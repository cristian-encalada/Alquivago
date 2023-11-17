# Alquivago

![Alquivago - Logo](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/logo/alquivago_logo_v1-enhanced.png?raw=true)

__Alquivago__ is a web application that compares `long-term` house/apartment `rental prices` from three different sources (websites) in Montevideo - Uruguay.

## Table of contents

- [Scope](#scope)
    - [Problem to solve](#problem-to-solve)
    - [Out of the scope](#out-of-the-scope)
- [Project planning](#project-planning)
- [Technology and Tools](#technology-and-tools)
- [Features](#features)
    - [Rentals List View](#rentals-list-view)
    - [Rentals Comparison](#data-comparison)
    - [Rentals Geolocalization](#rentals-geolocalization)
- [Live Application](#live-application)
    - [Alquivago - Live URL](#alquivago---live-url)
    - [Landing page - Live URL](#landing-page---live-url)
- [Run in local environment](#run-in-local-environment)
    - [Prerequisites](#prerequisites)
    - [Run docker compose](#run-docker-compose)
- [Architecture](#architecture)
- [Future Improvements](#future-improvements)
- [Authors](#authors)

## Scope

### Problem to solve

__Finding a house or apartment for rent for long-term periods of time__ is a very tedious task. This is because there are many possible sources from which to extract information, with each of them containing a large number of properties. Each website presents the data in different formats making it difficult to compare the different options.

### Out of the scope

The technical term to refer to the project is like a `meta-search engine focussed on house/apartment rents`, this kind of software is specialized in helping users search for and compare options across different providers but `doesn't handle the renting process directly`.

AlquiVago is in charge of `listing and filtering all the available rental options` (houses or apartments), and then proportionate a link and redirect the user to the original site.

## Project planning

The implemetation of the project can be summarized with the following diagram:

![Project planning](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/planning/planning_diagram.png?raw=true)


1. We started the defining the MVP (Minimum Viable Product), in our case was to display a list of all rental properties after the initial data retrieved.
2. The second priority was to have working the filter and sorting algorithms as a main feature.
3. Once the previous step was completed, it was really important to have a feature to compare few favorite properties and check easily these properties details.
4. Finally, having a Geolocalization feature was a nice feature in order to help the users to have an overview of the total number and all the available properties by zone.

## Technology and Tools

![Technology and Tools](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/technology/tech_tools.png?raw=true)

## Features

### Rentals List View

![Rentals List View](/landing_page/assets/funcionalidades/filtro.gif)

### Rentals Comparison

![Rentals Comparison](/landing_page/assets/funcionalidades/comparar.gif)


### Rentals Geolocalization

![Rentals Geolocalization](/landing_page/assets/funcionalidades/mapa.gif)

## Live Application

### Alquivago - Live URL

https://alquivago.vercel.app/

![Alquivago - Live URL](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/live-demo/live_page_alquivago.png?raw=true)

### Landing page - Live URL

https://alquivago-landing.vercel.app/


![Landing page - Live URL](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/live-demo/landing_page.png?raw=true)


## Run in local environment

### Pre-requisites

* __On Windows:__

    - Install Docker Desktop [Oficial documentation](https://docs.docker.com/desktop/install/windows-install/)

* __On Linux:__
    - Install Docker Desktop [Oficial documentation](https://docs.docker.com/desktop/install/linux-install/)


### Run docker compose

1. docker pull gab020/vite-react:latest
2. docker pull gab020/flaskimg:latest
3. docker-compose up -d --build

- The Flask API should be running on:

```sh
localhost:5000/apidocs/
```

- The nextJS app should be running on:

```sh
localhost:3000
```

## Architecture

![Alquivago - MVC Architecture](https://github.com/cristian-encalada/Alquivago/blob/demo-utils/archtecture_diagram/Alquivago_MVC_diagram.png?raw=true)

This project uses a MVC (Model-View-Controller) Architecture.

* __Model:__ This represents the application's data and the `business logic for manipulating that data`. In this case we have python scripts that interact with the  NoSQL MongoDB database. It handles tasks such as data retrieval, storage, validation, and manipulation. 

* __View:__ This layer is responsible for `presenting data to the user`. In our project, the React components belong to the View layer.

* __Controller:__ It acts as an `intermediary between the Model and the View`. It receives requests from the client, processes them, interacts with the Model to retrieve or modify data, and then sends the appropriate response back to the client. In this project, on the Flask application, the Flask routes (API endpoints) and associated functions interact as controllers. 

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