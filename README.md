# Public Apis

A responsive Angular web application that allows the user to quickly filter a list of public APIs curated on GitHub.

## Client

The [client](client/README.md) is an [Angular](https://angular.io/) application utilizing [Angular Material](https://material.angular.io/) in order to rapidly create a responsive web application with modern UI components.

## Server

The server is a Node.js application that serves up content from a list of API’s curated on GitHub, <https://github.com/toddmotto/public-apis>.

## Run with Docker

You can run `public-apis` within a Docker container.

This project utilizes Docker to build and deploy the application. With Docker multi-stage builds, we can build both the clien and the server with [Node.js](https://nodejs.org/en/) as you would do locally, but end up with a thin and efficient image, with just the compiled code.

Build the Docker image

    docker build -t public-apis:latest .

Run the container

    docker run -it --rm -p 80:8080 public-apis:latest service

Test out the app by navigating to <http://localhost> in your browser.
