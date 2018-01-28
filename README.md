# Public Apis

A responsive Angular web application that allows the user to quickly filter a collective list of public JSON APIs for use in web development.

The application is componsed of a client and a server.

## Client

The [client](client/README.md) is an [Angular](https://angular.io/) application utilizing [Angular Material](https://material.angular.io/) in order to rapidly create a responsive web application with modern UI components.

## Server

The server is a Node.js application that serves up content from a [list of public JSON API’s](https://github.com/toddmotto/public-apis) curated on GitHub (courtesy of Todd Motto).

## Run with Docker

You can run `public-apis` within a Docker container.

This project utilizes Docker to build and deploy the application. With Docker multi-stage builds, we can build both the client and the server with [Node.js](https://nodejs.org/en/) as you would do locally, but end up with a thinner and more efficient image, with just the compiled code.

Build the Docker image

    docker build -t public-apis:latest .

Run the container

    docker run -it --rm -p 80:8080 public-apis:latest service

Test out the application by navigating to <http://localhost> in your browser.
