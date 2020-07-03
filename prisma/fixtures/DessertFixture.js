const { prisma } = require('../../src/generated/prisma-client');

async function dessertFixture() {
    await prisma.createDessert({
        id: 'ckbzqpe6801t40928x9njr4so',
        price: 3.50,
        name: 'Tiramisu nutella',
        img: 'https://img.cuisineaz.com/610x610/2016-02-07/i79723-tiramisu-au-nutella.jpg'
    })

    await prisma.createDessert({
        id: 'ckbzqpe6q01t90928qjqc5a28',
        price: 3.50,
        name: 'Tiramisu oreo',
        img: 'https://www.yumelise.fr/wp-content/uploads/2019/08/tiramisu-oreo-2.jpg'
    })

    await prisma.createDessert({
        id: 'ckbzqpe7201te0928busrqyq0',
        price: 2.50,
        name: 'Fondant au chocolat',
        img: 'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/Import/coulant-fondant-chocolat_ss.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393'
    })

    await prisma.createDessert({
        id: 'ckc20rrd7041m07995li7aocf',
        price: 3.50,
        name: 'Tiramisu aux framboises',
        img: 'https://i.ibb.co/nR0NpR9/tiramisu-framboise.jpg"'
    })
}
dessertFixture().catch(e => console.error(e));
