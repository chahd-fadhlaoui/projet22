import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classe } from '../model/Classe.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class VoyageService {

    apiURL: string = 'http://localhost:8080/voyage/api';

  voyages!: Voyage[]; // un tableau de voyages
 // classes!: Classe[];

  constructor(private http : HttpClient) {
   /* this.voyages = [
      { idVoyage: 1, nomVoyage: "Voyage en France", prixVoyage: 2000.50, dateVoyage: new Date("01/14/2019") },
      { idVoyage: 2, nomVoyage: "Séjour à Bali", prixVoyage: 3000, dateVoyage: new Date("12/17/2020") },
      { idVoyage: 3, nomVoyage: "Aventure en Nouvelle-Zélande", prixVoyage: 3500.75, dateVoyage: new Date("02/20/2022") }
    ];*/
  }
  listeVoyage(): Observable<Voyage[]>{
    return this.http.get<Voyage[]>(this.apiURL);
    }
    ajouterVoyage( voya: Voyage):Observable<Voyage>{
      return this.http.post<Voyage>(this.apiURL, voya, httpOptions);
      }
      

      supprimerVoyage(id: number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
      }
      

      consulterVoyage(id: number): Observable<Voyage> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Voyage>(url);
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

  updateVoyage(voya :Voyage) : Observable<Voyage>
{
return this.http.put<Voyage>(this.apiURL, voya, httpOptions);
}


listeClasses():Observable<Classe[]>{
  return this.http.get<Classe[]>(this.apiURL+"/cl");
  }
  
  rechercherParClasse(idCl: number): Observable<Voyage[]> {
    const url = `${this.apiURL}/voyagescl/${idCl}`;
    return this.http.get<Voyage[]>(url);
  }
  rechercherParNom(nom: string):Observable< Voyage[]> {
    const url = `${this.apiURL}/voyagesByName/${nom}`;
    return this.http.get<Voyage[]>(url);
    }
  
}