const { prisma } = require('../../src/generated/prisma-client');

async function pizzaFixture() {

    await prisma.createPizza({
        id: 'ckbzqsepd01vk0928vhmh0g02',
        name: 'La cannibale',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PORI/FR_PORI_fr_hero_3744.png?v-666378964',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Sauce bolognaise à la viande"]
            },
            viandes: {
                label: "Viandes",
                items: ["Pepperoni", "Jambon", "Merguez", "Oeuf"]
            },
            legumes: {
                label: "Légumes",
                items: ["Olives", "Champignon", "Oignon", "Poivron"]
            },
            fromages: {
                label: "Frommages",
                items: []
            },
            epices: {
                label: "Épices",
                items: []
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckbzqsepn01vq092817n0dbuv',
        name: 'Boursin',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PBOU/FR_PBOU_fr_hero_4205.jpg?v-650703197',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Crème fraiche"]
            },
            viandes: {
                label: "Viandes",
                items: ["Thon", "Merguez", "Oeuf"]
            },
            legumes: {
                label: "Légumes",
                items: ["Oignon",]
            },
            fromages: {
                label: "Frommages",
                items: ["Chèvre"]
            },
            epices: {
                label: "Épices",
                items: ["Basilic"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckbzqsepv01vw0928rkeqnxpp',
        name: 'Vegan Peppina',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PVPE/FR_PVPE_fr_hero_3117.png?v-550621428',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Tomate"]
            },
            viandes: {
                label: "Viandes",
                items: []
            },
            legumes: {
                label: "Légumes",
                items: ["Olives", "Champignon", "Oignon", "Poivron", "Avocat"]
            },
            fromages: {
                label: "Frommages",
                items: ["Ricotta"]
            },
            epices: {
                label: "Épices",
                items: ["Herbes de Provence"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckbzqseq401w209282196r2k2',
        name: 'Pepperoni',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PDIP/FR_PDIP_fr_hero_3744.png?v1515771323',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Barbecue",]
            },
            viandes: {
                label: "Viandes",
                items: ["Pepperoni", "Lardons", "Oeuf"]
            },
            legumes: {
                label: "Légumes",
                items: ["Olives", "Avocat"]
            },
            fromages: {
                label: "Frommages",
                items: ["Roquefort"]
            },
            epices: {
                label: "Épices",
                items: ["Persillade"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckbzqseql01we09288070zy8m',
        name: 'Kebab',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PRYK/FR_PRYK_fr_hero_3555.png?v-1007165671',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Barbecue"]
            },
            viandes: {
                label: "Viandes",
                items: ["Kebab", "Merguez"]
            },
            legumes: {
                label: "Légumes",
                items: ["Poivron"]
            },
            fromages: {
                label: "Frommages",
                items: ["Mozzarela"]
            },
            epices: {
                label: "Épices",
                items: ["Herbes de Provence", "Basilic", "Persillade", "Paprika"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckbzqseqw01wk0928p4xqtu08',
        name: 'Bacon Groovy',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PBCG/FR_PBCG_fr_hero_2762.png?v-1641942369',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Barbecue"]
            },
            viandes: {
                label: "Viandes",
                items: ["Poulet mariné", "Bacon", "Jambon"]
            },
            legumes: {
                label: "Légumes",
                items: ["Oignon"]
            },
            fromages: {
                label: "Frommages",
                items: ["Mozzarela"]
            },
            epices: {
                label: "Épices",
                items: ["Paprika"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckbzqser501wq0928694nj8ul',
        name: 'Savoyarde',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PSVY/FR_PSVY_fr_hero_2047.png?v-1921701074',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Crème fraiche"]
            },
            viandes: {
                label: "Viandes",
                items: ["Bacon", "Merguez"]
            },
            legumes: {
                label: "Légumes",
                items: ["Oignon"]
            },
            fromages: {
                label: "Frommages",
                items: ["Chèvre"]
            },
            epices: {
                label: "Épices",
                items: ["Persillade"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckc1yw5fj01v607997x7i22j0',
        name: 'Saumon',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PSSE/FR_PSSE_fr_hero_2142.png?v669834368',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Crème fraiche"]
            },
            viandes: {
                label: "Viandes",
                items: ["Saumon", "Oeuf"]
            },
            legumes: {
                label: "Légumes",
                items: ["Champignon", "Oignon"]
            },
            fromages: {
                label: "Frommages",
                items: ["Emmental"]
            },
            epices: {
                label: "Épices",
                items: ["Basilic"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })

    await prisma.createPizza({
        id: 'ckc1yw5fg65t607997x7i22j0',
        name: 'Orientale',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PORI/FR_PORI_fr_hero_3744.png?v-666378964',
        composition: {
            sauces: {
                label: "Sauces",
                items: ["Tomate"]
            },
            viandes: {
                label: "Viandes",
                items: ["Kebab"]
            },
            legumes: {
                label: "Légumes",
                items: ["Olives"]
            },
            fromages: {
                label: "Frommages",
                items: ["Mozzarela"]
            },
            epices: {
                label: "Épices",
                items: ["Herbes de Provence"]
            }
        },
        category: {
            connect: {
                id: 'ckbzqp9vc01su0928clefrmtk'
            }
        }
    })
}
pizzaFixture().catch(e => console.error(e));