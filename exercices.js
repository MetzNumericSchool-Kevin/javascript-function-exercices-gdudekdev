// Initialisation des constantes

const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["herbe", "eau", "poudre magique"],
    temps_fabrication: 3,
  }, // Temps en secondes
  potion_poison: {
    ingredients: ["venin", "plante toxique", "eau"],
    temps_fabrication: 5,
  },
  potion_fortune: {
    ingredients: ["chance", "or", "eau"],
    temps_fabrication: 4,
  },
};
const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];

// Salutation Aventurier

function salutations(nom_sorcier) {
  console.log(
    `Salutations Aventurier ! Je me nomme ${nom_sorcier} pour vous servir.`
  );
}

salutations(nom_sorcier);

// Quel est le tarif d'une potion?

function tarif(id_potion, quantite, prix_potion = 1) {
  let tarif = quantite * prix_potion;
  console.log(
    `Le prix de votre commande de ${quantite} ${id_potion} s'élève à ${tarif}`
  );
  return tarif;
}

tarif("potion_soin", 3, 10);

// Fabrication de potion

// function createPotion(id_potion,prix=10,stock=1){
//     newPotion={id: id_potion,
//         prix: prix,
//         stock:stock
//     };
//     console.log(`Une nouvelle potion a été ajouté : ${JSON.stringify(newPotion)}`)
//     return newPotion;
// }

// createPotion("Philtre de puissance",stock=10);

// Ajout de nouvelles potions dans l'inventaire

function addPotion(inventaire, newPotion) {
  const existingPotion = inventaire.find(
    (potion) => potion.id === newPotion.id
  );

  if (existingPotion) {
    existingPotion.stock += newPotion.stock;
  } else {
    inventaire.push(newPotion);
  }
  inventaire.sort((a, b) => b.stock - a.stock);
  console.log(`Nouveau inventaire: ${JSON.stringify(inventaire)}`);
}

// addPotion(inventaire,createPotion("philtre_puissance",10,10))
// addPotion(inventaire,createPotion("potion_soin",10,2))

// Cherche moi les potions qui ...

function stockPotion(inventaire) {
  let filtredInventory = inventaire.filter((potion) => potion.stock != 0);
  console.log(
    `Inventaire filtré (pas de stock=0)${JSON.stringify(filtredInventory)}`
  );
  return filtredInventory;
}

stockPotion(inventaire);

function outOfPotion(inventaire) {
  let noStock = [];
  inventaire.forEach((potion) => {
    if (potion.stock === 0) {
      noStock.push(potion);
    }
  });

  console.log(
    `Inventaire filtré (rupture de stock uniquement) :${JSON.stringify(
      noStock
    )}`
  );
}

outOfPotion(inventaire);

console.log(
  `L'inventaire initial n'a pas changé :${JSON.stringify(inventaire)}`
);

// Allons faire de la cueillette, nous avons besoin de plus de potions !

function createPotion(potion_id, ingredients, callback, prix = 10, stock = 1) {
  let recette = manuel_de_fabrication[potion_id]?.ingredients;

  if (!recette) {
    throw new Error(`Aucune recette trouvée pour ${potion_id}`);
  }

  let missingIngredients = recette.filter(
    (ingredient) => !ingredients.includes(ingredient)
  );

  if (missingIngredients.length === 0) {
    setTimeout(() => {
      callback(potion);
    }, manuel_de_fabrication[potion_id].temps_fabrication * 1000);
    return { id: potion_id, prix: prix, stock: stock };
  } else {
    throw new Error(
      `Il manque des ingrédients à cette potion: ${missingIngredients.join(
        ", "
      )}`
    );
  }
}

function testPotionCreation() {
    const tests = [
        { potion_id: "potion_soin", ingredients: ["herbe", "eau", "poudre magique"] },
        { potion_id: "potion_poison", ingredients: ["venin", "plante toxique"] }, // Ingrédient manquant "eau"
        { potion_id: "potion_fortune", ingredients: ["chance", "or"] }, // Ingrédient manquant "eau"
        { potion_id: "potion_poison", ingredients: ["venin", "plante toxique", "eau"] }
    ];

    tests.forEach(test => {
        try {
            const resultat_creation_potion = createPotion(test.potion_id, test.ingredients);

            console.log(`Potion ${resultat_creation_potion.id} créée avec succès.`);
            addPotion(inventaire, resultat_creation_potion);
        } catch (error) {

            console.error(error.message);
        }

    });
    console.log("Inventaire final:", JSON.stringify(inventaire));
}
testPotionCreation();

// Une potion n'est jamais fabriquée en retard, ni en avance d'ailleurs. Elle est fabriquée à l'heure prévue!

function laPotionEstFinie(potion) {
  console.log("Fabrication de potion finie :", potion);
  addPotion(inventaire, potion);
}
