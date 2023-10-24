import { Component, OnInit } from '@angular/core';
import { Voyage } from '../model/voyage.model';
import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html'
})
export class AddVoyageComponent implements OnInit {

  newVoyage: Voyage = new Voyage(); // Déclarer 'newVoyage' de type 'Voyage'
  message : string;
  constructor(private voyageService:VoyageService) {
    this.message = '';
  }

  ngOnInit(): void {
  }

  addVoyage() {
    this.voyageService.ajouterVoyage(this.newVoyage);
    this.message="voyage"+ " "+this.newVoyage.nomVoyage +" "+ "ajouté avec succés";

  }
}
