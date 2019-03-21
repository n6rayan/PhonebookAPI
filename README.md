# Phonebook API

A basic REST phonebook API with CRUD endpoints.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install:

`Node.js`, `Mocha`, `MongoDB`

### Installing

A step by step series of examples that tell you how to get a development environment running.

* Clone Repository: `git clone git@bitbucket.org:N6Rayan/phonebook-api.git`
* Install Dependencies: `npm install`
* Start App Locally: `npm start`
* Get All Contacts: `GET /contact`

## Running the tests

To run tests, simply run `npm test`.

## Testing API Endpoints

* Fetch all contacts:

```curl http://localhost:3001/contact```

* Fetch individual contact:

```curl http://localhost:3001/contact/{contactId}```

* Create contact:

```curl -H "Content-Type: application/json" -X POST -d '{"name":"Bob","phoneNumber":"07123456789","address":"123 Somee Road"}' http://URL/```