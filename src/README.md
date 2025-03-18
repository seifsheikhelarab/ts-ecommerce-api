# TS Ecommerce API
======================

## Overview

TS Ecommerce API is a RESTful API built with Express.js, TypeScript, and MongoDB. It provides a basic structure for building an e-commerce application.

## Features

* User authentication and authorization
* Product management (CRUD operations)
* Session management

## Installation

To install the project, run the following command:

```bash
npm install
```

## Configuration

The project uses the `config` package to manage environment variables. You can configure the project by creating a `default.ts` file in the `config` directory.

## Running the Project

To start the project, run the following command:

```bash
npm run dev
```

This will start the development server, and you can access the API at `http://localhost:1337`.

## API Endpoints

The API has the following endpoints:

* `POST /users`: Create a new user
* `POST /sessions`: Create a new session
* `GET /products`: Get all products
* `GET /products/:productId`: Get a product by ID
* `POST /products`: Create a new product
* `PUT /products/:productId`: Update a product
* `DELETE /products/:productId`: Delete a product

## API Documentation

You can find the API documentation in the `docs` directory.

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

The project is licensed under the MIT License. See the `LICENSE` file for details.

## Authors

* Seif Sheikhelarab

## Acknowledgments

* MongoDB
* Express.js
* TypeScript
* config package
* pino-pretty package