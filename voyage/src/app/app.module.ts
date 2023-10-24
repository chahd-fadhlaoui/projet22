import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoyagesComponent } from './voyages/voyages.component'; 
import { AddVoyageComponent } from './add-voyage/add-voyage.component'; 
import { FormsModule } from '@angular/forms';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component'; 

@NgModule({
  declarations: [
    AppComponent,
    VoyagesComponent, 
    AddVoyageComponent, 
    UpdateVoyageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
