# Containerizing Django and React with Docker

Nowadays, software developers work in multiple projects at the same time. The projects usually present distinct requirements, nevertheless, they musst be identically reproduced in multiple machines and, sometimes, they have to live in the same hardware - the developer's computer. The so called container technology stands out among the different approaches used to reliably reproduce software projects.

A container is a standard unit of software used to build a virtualized operational system (OS). The container's OS has control over some components of the host system and can isolate the processes related to the container's services. This isolation enhances the reproducibility of the containerized application. The container technology has been developed since the 2000s, but in 2013, when Docker was introduced to the community, its popularity has exploded.

In this tutorial you'll learn how to use Docker containers to isolate the services of a web application, regarding the development environment. The application stack to be containerized is formed by three layers, the database layer (PostgreSQL), the API/backend layer (Django), and the APP/frontend layer (React). Each stack layer will be isolated in a container and should be fully reproducible, meaning that anyone (any machine with minimum requirements) will be able to run our containers and completely reproduce our application!

To better organize this tutorial, it was split in 4 stages:

- **Stage 0**: Foundation - [`stage0-base`](https://github.com/rodolfoksveiga/docker-django-react/tree/stage0-base)
- **Stage 1**: Django API - [`stage1-django`](https://github.com/rodolfoksveiga/docker-django-react/tree/stage1-django)
- **Stage 2**: PostgreSQL Database - [`stage2-psql`](https://github.com/rodolfoksveiga/docker-django-react/tree/stage2-psql)
- **Stage 3**: React APP - [`stage3-react`](https://github.com/rodolfoksveiga/docker-django-react/tree/stage3-react)

At the end of each stage we'll have the respective service running in a Docker container. The progress of each stage was committed to the [tutorial's Git repository](https://github.com/rodolfoksveiga/docker-django-react) in a separated branch. You can clone the Git repository into your local machine and, if something goes wrong, you can shift among the branches as you wish.

#### Requirements

Docker containers hold a whole OS, therefore, packages installed in containers can be used to execute commands and manage the containers' files. To manage the containers and sync with the tutorial's Git repository, we must have the following packages installed in our system:

- Git
  - `git 2.35`
- Docker
  - `docker 20.10`
  - `docker-compose 1.29`

> You can still use newer version of the packages, but be aware that sometimes you may reproduce different outputs.

### Stage 0 - Foundation

In the initial stage we'll build the foundation of our project. Since learning the basics of Django and React isn't in the scope of this tutorial, we'll clone the [tutorial's Git repository](https://github.com/rodolfoksveiga/docker-django-react) to setup locally both backend and frontend. After that we'll be able to start configuring our containers.

- Create the local repository `~/mayflower`, clone the Git repository into it, and checkout the branch `stage0-base`.

  ```bash
  mkdir ~/mayflower
  cd ~/mayflower
  git clone https://github.com/rodolfoksveiga/docker-django-react.git .
  git checkout stage0-base
  ```

  After cloning the repository, we have two subdirectories inside `~/mayflower`: `./api` (backend) and `./app` (frontend).

  The backend is a simple `django` API that exposes the `/api/students` endpoint. In this endpoint we can fetch (GET) all the records from the `Student` model as a JSON. `Student` is a user-defined model with two fields: `id` and `name`.

  The frontend is a React APP that contains only one page, defined in `~/mayflower/app/src/App.js`. When the page is rendered we try to fetch the data from our API and print a list with all the students fetched or handle inconsistencies.

At this point, we still can't test our application, because we haven't installed all the packages necessary to run it on the host machine and we still haven't setup the Docker containers. So I ask you to trust me for now and I promise you that soon we'll have the application running in containers, so we can play around with it.
