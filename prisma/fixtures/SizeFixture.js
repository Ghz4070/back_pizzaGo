const { prisma } = require('../../src/generated/prisma-client');

async function sizeFixture() {
    await prisma.createSize({
        id: 'ckbzqpydm01ud0928233me1xk',
        name: 'S',
        price: 2
    })

    await prisma.createSize({
        id: 'ckbzqpye001ui092878olw0tx',
        name: 'M',
        price: 2
    })

    await prisma.createSize({
        id: 'ckbzqpyea01un0928tflbhuux',
        name: 'L',
        price: 2
    })

    await prisma.createSize({
        id: 'ckbzqpyei01us0928ft3ksj81',
        name: 'XL',
        price: 2
    })
}
sizeFixture().catch(e => console.error(e));
