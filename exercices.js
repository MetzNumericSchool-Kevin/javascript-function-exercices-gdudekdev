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


class Inventaire {
    constructor() {
      this.inventaire = [];
    }
  
    addPotion(newPotion) {
      const existingPotion = this.inventaire.find(
        (potion) => potion.id === newPotion.id
      );
  
      if (existingPotion) {
        existingPotion.stock += newPotion.stock;
      } else {
        this.inventaire.push(newPotion);
      }
  
      this.inventaire.sort((a, b) => b.stock - a.stock);
    }
  
    lesPotionsEnStock() {
      let filtredInventory = this.inventaire.filter((potion) => potion.stock != 0);
      return filtredInventory;
    }
  
    lesPotionsEnRuptureDeStock() {
      let noStock = [];
      this.inventaire.forEach((potion) => {
        if (potion.stock === 0) {
          noStock.push(potion);
        }
      });
      return noStock;
    }
  }
  
  const inventaireBoutiquePotionsA = new Inventaire();
  const inventaireBoutiquePotionsB = new Inventaire();
  
  inventaireBoutiquePotionsA.addPotion({ id: "potion_soin", prix: 10, stock: 5 });
  inventaireBoutiquePotionsA.addPotion({ id: "potion_poison", prix: 15, stock: 0 });
  
  inventaireBoutiquePotionsB.addPotion({ id: "potion_fortune", prix: 20, stock: 3 });
  
  console.log("Potions en stock dans l'inventaire A:", inventaireBoutiquePotionsA.lesPotionsEnStock());
  console.log("Potions en rupture de stock dans l'inventaire A:", inventaireBoutiquePotionsA.lesPotionsEnRuptureDeStock());
  console.log("Potions en stock dans l'inventaire B:", inventaireBoutiquePotionsB.lesPotionsEnStock());
// Bonus, un sorcier a toujours la classe!