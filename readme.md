
<!-- TOC ignore:true -->
# Vice React, React Query, FeatherJs Boilerplate
API for Vice Software&#39;s React, React Query and FeathersJs boilerplate.

<!-- TOC ignore:true -->
# Table of Contents

<!-- TOC -->

- [Running the App in Docker](#running-the-app-in-docker)
    - [Running a Dev Docker Setup](#running-a-dev-docker-setup)
        - [Resetting the Database](#resetting-the-database)
- [Architecture](#architecture)
    - [Web UI](#web-ui)
    - [API](#api)

<!-- /TOC -->

# Running the App in Docker
Use the commands below to run the app in a docker environment.

## Running a Dev Docker Setup
Run the command below to run a dev docker setup.

```bash
docker-compose -f docker-compose-dev.yml up
```

### Resetting the Database
To reset the database take down the docker applicaiton using the -v command to remove all the volumes as shown below:

```bash
docker-compose -f docker-compose-dev.yml down -v
```

and then bring it back up as described [here](#running-a-dev-docker-setup).

# Architecture
This application is a single page application with the following components.

## Web UI
React based web frontend. See documentation [here](web/readme.md).

## API
FeatherJs based backend. See the documentation [here](api/README.md).



