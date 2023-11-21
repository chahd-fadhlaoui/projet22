import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voyage } from '../model/voyage.model';
import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-update-voyage',
  templateUrl: './update-voyage.component.html',
  styles: [
  ]
})
export class UpdateVoyageComponent implements OnInit {

  currentVoyage = new Voyage();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private voyageService: VoyageService) {
  }

  ngOnInit(): void {
    const voyageId = this.activatedRoute.snapshot.params['id'];
    this.currentVoyage = this.voyageService.consulterVoyage(voyageId);
  }

  updateVoyage() {
    this.voyageService.updateVoyage(this.currentVoyage);
    this.router.navigate(['voyages']);
  }
}