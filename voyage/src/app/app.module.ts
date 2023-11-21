import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoyagesComponent } from './voyages/voyages.component'; 
import { AddVoyageComponent } from './add-voyage/add-voyage.component'; 
import { FormsModule } from '@angular/forms';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component'; 
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    VoyagesComponent, 
    AddVoyageComponent, 
    UpdateVoyageComponent, LoginComponent, ForbiddenComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
