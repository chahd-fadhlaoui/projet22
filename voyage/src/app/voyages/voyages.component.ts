import { Component, OnInit } from '@angular/core';
import { Voyage } from '../model/voyage.model'; 
import { VoyageService } from '../services/voyage.service'; 

@Component({
  selector: 'app-voyages', 
  templateUrl: './voyages.component.html' 
})
export class VoyagesComponent implements OnInit {

  voyages?: Voyage[]; 

  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.voyages = this.voyageService.listeVoyages(); 
  }

  supprimerVoyage(v: Voyage) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.voyageService.supprimerVoyage(v); 
    }
  }
}
