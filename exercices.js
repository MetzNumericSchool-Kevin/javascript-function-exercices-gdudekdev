// Initialisation des constantes

const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
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

function salutations(nom_sorcier){
    console.log(`Salutations Aventurier ! Je me nomme ${nom_sorcier} pour vous servir.`);
};

salutations(nom_sorcier);

// Quel est le tarif d'une potion?

function tarif(id_potion,quantite,prix_potion=1){
    let tarif=quantite*prix_potion;
    console.log(`Le prix de votre commande de ${quantite} ${id_potion} s'élève à ${tarif}`);
    return tarif;
};

tarif("potion_soin",3,10);

// Fabrication de potion

function createPotion(id_potion,prix=10,stock=1){
    newPotion={id: id_potion,
        prix: prix,
        stock:stock
    };
    console.log(`Une nouvelle potion a été ajouté : ${JSON.stringify(newPotion)}`)
    return newPotion;
}

createPotion("Philtre de puissance",stock=10);