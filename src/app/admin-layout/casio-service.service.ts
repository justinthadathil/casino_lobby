import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { CasioData } from './casio-data';

@Injectable({
  providedIn: 'root'
})
export class CasioServiceService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllData(): Observable<CasioData>{
    return this.http.get<CasioData>(this.apiUrl)
  }

}
