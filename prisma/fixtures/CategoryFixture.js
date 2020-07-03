const { prisma } = require('../../src/generated/prisma-client');

async function categoryFixture() {
    await prisma.createCategory({
        id: 'ckbzqp9vc01su0928clefrmtk',
        name: 'Première classe'
    })

    await prisma.createCategory({
        id: 'ckbzqp9vp01sz0928324zybba',
        name: 'Deuxième classe'
    })
}
categoryFixture().catch(e => console.error(e));