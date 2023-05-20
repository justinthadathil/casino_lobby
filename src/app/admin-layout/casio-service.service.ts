import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CasioServiceService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  //get all Categories
  getCategories(){
    let categories = new Observable((dataReceived) => {
      this.http.get(this.apiUrl).subscribe((data: {casino: {categories: []}}) => {
        dataReceived.next(data.casino.categories);
        dataReceived.complete();
      });
    });
    return categories;
  }

  //get all Games
  getGames(){
    let games = new Observable((dataReceived) => {
      this.http.get(this.apiUrl).subscribe((data: {casino: {games: {}}}) => {
        dataReceived.next(data.casino.games);
        dataReceived.complete();
      });
    });
    return games;
  }

}
