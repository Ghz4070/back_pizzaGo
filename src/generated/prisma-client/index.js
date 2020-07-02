"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Promo",
    embedded: false
  },
  {
    name: "Size",
    embedded: false
  },
  {
    name: "Dessert",
    embedded: false
  },
  {
    name: "Drink",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Pizza",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://database-pizza-go-fbadf8e32e.herokuapp.com`
});
exports.prisma = new exports.Prisma();
