import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "La Parisienne",
      foodDetails: "poulets, salades, tomates, maïs, choux rouge, concombre, fèves, oeufs",
      foodPrice: 20,
      foodImg: "https://unsplash.com/fr/photos/kcA-c3f_3FE"
    },
    {
      id: 2,
      foodName: "La fruité",
      foodDetails: "salades, tomates, choux rouge, potirons, avocats, figues, melons",
      foodPrice: 28,
      foodImg: "https://unsplash.com/fr/photos/IGfIGP5ONV0"
    },
    {
      id: 3,
      foodName: "La forestière",
      foodDetails: "salades, tomates, noix, biche, persil",
      foodPrice: 42,
      foodImg: "https://unsplash.com/fr/photos/xeTv9N2FjXA"
    },
    {
      id: 4,
      foodName: "La gourmande",
      foodDetails: "salades, tomates, carrotes, maïs, poulet, mozzarella",
      foodPrice: 24,
      foodImg: "https://unsplash.com/fr/photos/bBzjWthTqb8"
    },
    {
      id: 5,
      foodName: "La marinière",
      foodDetails: "salades, tomates, maïs, crevettes, moules",
      foodPrice: 54,
      foodImg: "https://unsplash.com/fr/photos/kcA-c3f_3FE"
    },
    {
      id: 6,
      foodName: "La poissonière",
      foodDetails: "salades, tomates, saumon, chèvre",
      foodPrice: 54,
      foodImg: "https://unsplash.com/fr/photos/IGfIGP5ONV0"
    },
    {
      id: 7,
      foodName: "La basique",
      foodDetails: "salades, tomates, carrotte, maïs",
      foodPrice: 16,
      foodImg: "https://unsplash.com/fr/photos/xeTv9N2FjXA"
    },
    {
      id: 8,
      foodName: "La fromagère",
      foodDetails: "salades, tomates, emmentale, mozzarella, chèvre",
      foodPrice: 24,
      foodImg: "https://unsplash.com/fr/photos/bBzjWthTqb8"
    }
    

  ]
}
