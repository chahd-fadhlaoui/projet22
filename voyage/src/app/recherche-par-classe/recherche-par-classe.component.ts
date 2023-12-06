import { Component, OnInit } from '@angular/core';
import { Voyage } from '../model/voyage.model';
import { Classe } from '../model/Classe.model';
import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-recherche-par-classe',
  templateUrl: './recherche-par-classe.component.html',
  styles: [
  ]
})
export class RechercheParClasseComponent implements OnInit {
  voyages! : Voyage[];
  idCl! : number;
  classes! : Classe[];
  
  constructor(private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.voyageService.listeClasses().subscribe(response => {
      this.classes = response; // Assuming _embedded is at the top level
      console.log(response);
    });
  }
  
  
onChange() {
  this.voyageService.rechercherParClasse(this.idCl).
  subscribe(voya =>{this.voyages=voya});
  }

}
