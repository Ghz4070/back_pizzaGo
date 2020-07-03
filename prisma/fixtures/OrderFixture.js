const { prisma } = require("../../src/generated/prisma-client");

async function orderFixture() {
  await prisma.createOrder({
    id: "ckbzqunu301x4092841mx87b4",
    price: 12,
    status: 2,
    user: {
      connect: {
        id: "ckbzqunu301x4092841mxl1v8",
      },
    },
    content: {
      contents: {
        pizzas: [
          {
            name: "Bacon Groovy",
            img:
              "https://www.dominos.fr/ManagedAssets/FR/product/PBCG/FR_PBCG_fr_hero_2762.png?v-1641942369",
            id: "ckbz9o0nw00400777ap3d7qv6",
            category: {
              id: "ckbtkq4mn000g07770nk2mztu",
              name: "Première classe",
            },
            composition: {
              sauces: {
                label: "Sauces",
                items: ["Barbecue"],
              },
              viandes: {
                label: "Viandes",
                items: ["Poulet mariné", "Bacon", "Jambon"],
              },
              legumes: {
                label: "Légumes",
                items: ["Oignon"],
              },
              fromages: {
                label: "Frommages",
                items: ["Mozzarela"],
              },
              epices: {
                label: "Épices",
                items: ["Paprika"],
              },
            },
            price: 10,
            quantity: 1,
            size: "M",
            ingrediantRemove: {
              id: 0,
              sauce: [],
              viande: [],
              legume: [],
              fromage: [],
              epice: [],
            },
          },
          {
            name: "Kebab",
            img:
              "https://www.dominos.fr/ManagedAssets/FR/product/PRYK/FR_PRYK_fr_hero_3555.png?v-1007165671",
            id: "ckbz9o0n8003u0777pvcaqijq",
            category: {
              id: "ckbtkq4mn000g07770nk2mztu",
              name: "Première classe",
            },
            composition: {
              sauces: {
                label: "Sauces",
                items: ["Barbecue"],
              },
              viandes: {
                label: "Viandes",
                items: ["Kebab", "Merguez"],
              },
              legumes: {
                label: "Légumes",
                items: ["Poivron"],
              },
              fromages: {
                label: "Frommages",
                items: ["Mozzarela"],
              },
              epices: {
                label: "Épices",
                items: [
                  "Herbes de Provence",
                  "Basilic",
                  "Persillade",
                  "Paprika",
                ],
              },
            },
            price: 10,
            quantity: 1,
            size: "M",
          },
          {
            name: "Saumon",
            img:
              "https://www.dominos.fr/ManagedAssets/FR/product/PSSE/FR_PSSE_fr_hero_2142.png?v669834368",
            id: "ckbz9o0pc004c0777xw10eikp",
            category: {
              id: "ckbtkq4mn000g07770nk2mztu",
              name: "Première classe",
            },
            composition: {
              sauces: {
                label: "Sauces",
                items: ["Crème fraiche"],
              },
              viandes: {
                label: "Viandes",
                items: ["Saumon", "Oeuf"],
              },
              legumes: {
                label: "Légumes",
                items: ["Champignon", "Oignon"],
              },
              fromages: {
                label: "Frommages",
                items: ["Emmental"],
              },
              epices: {
                label: "Épices",
                items: ["Basilic"],
              },
            },
            price: 10,
            quantity: 1,
            size: "M",
          },
        ],
        drinks: [
          {
            name: "Coca-Cola",
            img:
              "https://www.staples.fr/content/images/product/72255-00H_1_xnl.jpg",
            price: 1.5,
            oz: 2.5,
            id: "ckbw31t5e003f0777udnj37h7",
            quantity: 1,
          },
        ],
        desserts: [
          {
            id: "ckbw31wgn003z0777ye6zlgru",
            price: 3.5,
            name: "Tiramisu nutella",
            img:
              "https://img.cuisineaz.com/610x610/2016-02-07/i79723-tiramisu-au-nutella.jpg",
            quantity: 1,
          },
        ],
      },
      promo: null,
    },
    promo: {
      connect: {
        id: "ckbzqprmy01u80928gubu3xa5",
      },
    },
  });
  await prisma.createOrder({
    id: "ckbvdhe5301x4092841mx87b4",
    price: 25,
    status: 5,
    user: {
      connect: {
        id: "ckbzqunu301x4092841mxl1v8",
      },
    },
    content: {
      contents: {
        pizzas: [
          {
            name: "Bacon Groovy",
            img:
              "https://www.dominos.fr/ManagedAssets/FR/product/PBCG/FR_PBCG_fr_hero_2762.png?v-1641942369",
            id: "ckbz9o0nw00400777ap3d7qv6",
            category: {
              id: "ckbtkq4mn000g07770nk2mztu",
              name: "Première classe",
            },
            composition: {
              sauces: {
                label: "Sauces",
                items: ["Barbecue"],
              },
              viandes: {
                label: "Viandes",
                items: ["Poulet mariné", "Bacon", "Jambon"],
              },
              legumes: {
                label: "Légumes",
                items: ["Oignon"],
              },
              fromages: {
                label: "Frommages",
                items: ["Mozzarela"],
              },
              epices: {
                label: "Épices",
                items: ["Paprika"],
              },
            },
            price: 10,
            quantity: 1,
            size: "M",
            ingrediantRemove: {
              id: 0,
              sauce: [],
              viande: [],
              legume: [],
              fromage: [],
              epice: [],
            },
          },
          {
            name: "Kebab",
            img:
              "https://www.dominos.fr/ManagedAssets/FR/product/PRYK/FR_PRYK_fr_hero_3555.png?v-1007165671",
            id: "ckbz9o0n8003u0777pvcaqijq",
            category: {
              id: "ckbtkq4mn000g07770nk2mztu",
              name: "Première classe",
            },
            composition: {
              sauces: {
                label: "Sauces",
                items: ["Barbecue"],
              },
              viandes: {
                label: "Viandes",
                items: ["Kebab", "Merguez"],
              },
              legumes: {
                label: "Légumes",
                items: ["Poivron"],
              },
              fromages: {
                label: "Frommages",
                items: ["Mozzarela"],
              },
              epices: {
                label: "Épices",
                items: [
                  "Herbes de Provence",
                  "Basilic",
                  "Persillade",
                  "Paprika",
                ],
              },
            },
            price: 10,
            quantity: 1,
            size: "M",
          },
          {
            name: "Saumon",
            img:
              "https://www.dominos.fr/ManagedAssets/FR/product/PSSE/FR_PSSE_fr_hero_2142.png?v669834368",
            id: "ckbz9o0pc004c0777xw10eikp",
            category: {
              id: "ckbtkq4mn000g07770nk2mztu",
              name: "Première classe",
            },
            composition: {
              sauces: {
                label: "Sauces",
                items: ["Crème fraiche"],
              },
              viandes: {
                label: "Viandes",
                items: ["Saumon", "Oeuf"],
              },
              legumes: {
                label: "Légumes",
                items: ["Champignon", "Oignon"],
              },
              fromages: {
                label: "Frommages",
                items: ["Emmental"],
              },
              epices: {
                label: "Épices",
                items: ["Basilic"],
              },
            },
            price: 10,
            quantity: 1,
            size: "M",
          },
        ],
        drinks: [
          {
            name: "Coca-Cola",
            img:
              "https://www.staples.fr/content/images/product/72255-00H_1_xnl.jpg",
            price: 1.5,
            oz: 2.5,
            id: "ckbw31t5e003f0777udnj37h7",
            quantity: 1,
          },
        ],
        desserts: [
          {
            id: "ckbw31wgn003z0777ye6zlgru",
            price: 3.5,
            name: "Tiramisu nutella",
            img:
              "https://img.cuisineaz.com/610x610/2016-02-07/i79723-tiramisu-au-nutella.jpg",
            quantity: 1,
          },
        ],
      },
      promo: null,
    },
    promo: {
      connect: {
        id: "ckbzqprmy98g80928gubu3rt3",
      },
    },
  });
}
orderFixture().catch((e) => console.error(e));

const { prisma } = require("../../src/generated/prisma-client");
