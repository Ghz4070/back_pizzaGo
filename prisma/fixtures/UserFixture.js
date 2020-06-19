const { prisma } = require('../../src/generated/prisma-client');

async function userFixture() {
    await prisma.createUser({
        firstname: 'Rafik',
        lastname: 'Mouloude',
        address: '18 Jean pascal du borris',
        zip: 93400,
        country: 'Saint-Ouen',
        tel: '0825411940',
        email: 'Rafik_mlde@ipssi.com',
        password: 'Azerty99-',
        tokenActivate: 'a',
        role: { set: ["USER", "ADMIN"] }
    })
}

userFixture().catch(e => console.error(e));

// const userFixture = require('./UserFixture');
// const ingredientFixture = require('./IngredientFixture');
// const drinkFixture = require('./DrinkFixture');
// const categoryFixture = require('./CategoryFixture');
// const pizzaFixture = require('./PizzaFixture');

// userFixture.userFixture;
// ingredientFixture.ingredientFixture;
// drinkFixture.drinkFixture;
// categoryFixture.categoryFixture;
// pizzaFixture.pizzaFixture;