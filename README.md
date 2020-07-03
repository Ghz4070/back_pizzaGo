<h1 align="center">
  <a href="https://database-pizza-go-fbadf8e32e.herokuapp.com">
    <img src="./static/PizzaGo_final.png" alt="PizzaGo" height="300">
  </a>
  <a href="https://database-pizza-go-fbadf8e32e.herokuapp.com">
    <img src="./static/prisma.png" alt="PizzaGo" height="200">
  </a>
  <br>
   PizzaGo - API with Prisma
  <br>
</h1>

<h4 align="center">Obtenez la pizza la plus délicieuse de tous les temps !</h4>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Contributing here](https://img.shields.io/badge/Contributing-here-lightgrey.svg)](.github/contributing.md)
[![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="#what-is-pizzago">What is PizzaGo ?</a> •
  <a href="https://database-pizza-go-fbadf8e32e.herokuapp.com">Documentation API GraphQL</a> •
  <a href="#configuration">Configuration</a> 
</p>

## What is PizzaGo ?
PizzaGo is a simple interface for your favorite restaurant, you can place an order in a few clicks.  
This is the configuration repository for Front-end, you may find more informations about this project [click here](https://github.com/Ghz4070/front_pizzaGo/tree/master)

## Configuration

```bash
# Clone the repository
$ git clone git@github.com:Ghz4070/front_pizzaGo.git

# create .env and add secret and algorithme for generate token
$ cp .env.dist .env

# (install prisma CLI if you not have)
$ yarn global add prisma
or 
$ npm install -g prisma

# configure prisma (install prisma CLI if you not have : yarn global add prisma)
$ cd prisma
$ docker-compose up -d
$ prisma deploy
$ prisma generate

# add all fixtures (add PizzaFixture and OrderFixture last)
$ node ./prisma/fixtures/FilesNameFixture.js

# install dependencies
$ cd /back_pizzaGo
$ yarn install

# Documentation API -> localhost:4466 or localhost:4466/_admin
# API URL -> http://localhost:4000/api/v1
$ yarn start

# API URL 
# https://prisma-pizzago-a941f66819.herokuapp.com/default/default

# add img
$ you can add image with web site imgbb
``` 
## deploy api on app.prisma.io and Heroku 
[here video explain](https://www.youtube.com/watch?v=QJe8YBs8Afg)

## MySQL with Docker

This example shows how to **set up Prisma using Docker and MySQL** locally on your machine. It then uses the Prisma client in a simple Node script to read and write data in the database.

> This example uses a new and empty database. **Learn how to connect Prisma to your existing database [here](https://www.prisma.io/docs/-a003/)**.

## More information for prisma

- [Use Prisma with an existing database](https://www.prisma.io/docs/-a003/)
- [Explore the Prisma client API](https://www.prisma.io/client/client-javascript)
- [Learn more about the GraphQL schema](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e/)
