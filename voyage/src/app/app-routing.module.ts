import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component';



const routes: Routes = [
  { path: 'Voyages', component: VoyagesComponent },
  {path: "add-voyage", component : AddVoyageComponent},
  {path: "updateVoyage/:id", component: UpdateVoyageComponent},
  {path: "", redirectTo: "voyages", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
