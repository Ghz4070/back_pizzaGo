const { prisma } = require('../../src/generated/prisma-client');

async function promoFixture() {
    await prisma.createPromo({
        id: 'ckbzqprmy01u80928gubu3xa5',
        name: 'Bon Plans',
        amount: 10,
    })

    await prisma.createPromo({
        id: 'ckbzqprmy98g80928gubu3rt3',
        name: 'Hiver chaud',
        amount: 25,
    })
}
promoFixture().catch(e => console.error(e));