import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  voyages: Voyage[]; // un tableau de voyages

  constructor() {
    this.voyages = [
      { idVoyage: 1, nomVoyage: "Voyage en France", prixVoyage: 2000.50, dateVoyage: new Date("01/14/2019") },
      { idVoyage: 2, nomVoyage: "Séjour à Bali", prixVoyage: 3000, dateVoyage: new Date("12/17/2020") },
      { idVoyage: 3, nomVoyage: "Aventure en Nouvelle-Zélande", prixVoyage: 3500.75, dateVoyage: new Date("02/20/2022") }
    ];
  }

  listeVoyages(): Voyage[] {
    return this.voyages;
  }

  ajouterVoyage(voyage: Voyage) {
    this.voyages.push(voyage);
  }

  supprimerVoyage(voyage: Voyage) {
    // Supprimer le voyage du tableau de voyages
    const index = this.voyages.indexOf(voyage, 0);
    if (index > -1) {
      this.voyages.splice(index, 1);
    }
  }

  consulterVoyage(id: number): Voyage {
    return this.voyages.find(v => v.idVoyage == id)!;
  }

  trierVoyages() {
    this.voyages = this.voyages.sort((v1, v2) => {
      if (v1.idVoyage! > v2.idVoyage!) {
        return 1;
      }
      if (v1.idVoyage! < v2.idVoyage!) {
        return -1;
      }
      return 0;
    });
  }

  updateVoyage(voyage: Voyage) {
    this.supprimerVoyage(voyage);
    this.ajouterVoyage(voyage);
    this.trierVoyages();
  }
}
