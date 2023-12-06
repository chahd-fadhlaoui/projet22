import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voyage } from '../model/voyage.model';
import { VoyageService } from '../services/voyage.service';
import { Classe } from '../model/Classe.model';

@Component({
  selector: 'app-update-voyage',
  templateUrl: './update-voyage.component.html',
  styles: [
  ]
})
export class UpdateVoyageComponent implements OnInit {

  currentVoyage = new Voyage();
  classes! : Classe[];
  updatedClId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private voyageService: VoyageService) {
  }

  ngOnInit(): void {
    this.voyageService.listeClasses().
subscribe(cl => {this.classes = cl;
console.log(cl);
});



    this.voyageService.consulterVoyage(this.activatedRoute.snapshot.params['id']).
subscribe( voya =>{ this.currentVoyage = voya;

  this.updatedClId =this.currentVoyage.classe!.idCl;

} ) ;
   
  }

  updateVoyage() {
    this.currentVoyage.classe = this.classes.
 find(cl => cl.idCl == this.updatedClId)!;
    this.voyageService.updateVoyage(this.currentVoyage).subscribe(voya => {
      this.router.navigate(['Voyages']);}
    );
  }
}