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
