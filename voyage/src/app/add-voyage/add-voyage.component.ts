import { Component, OnInit } from '@angular/core';
import { Voyage } from '../model/voyage.model';
import { VoyageService } from '../services/voyage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html'
})
export class AddVoyageComponent implements OnInit {

  newVoyage: Voyage = new Voyage(); // Déclarer 'newVoyage' de type 'Voyage'
  message : string;
  constructor(private voyageService:VoyageService , private router: Router) {
    this.message = '';
  }

  ngOnInit(): void {
  }

  addVoyage() {
    this.voyageService.ajouterVoyage(this.newVoyage);
    this.message = 'Voyage ' + this.newVoyage.nomVoyage + ' ajouté avec succès';
  
    // Update the route to 'Voyages' (with the correct case)
    this.router.navigate(['Voyages']);
  }
  
}