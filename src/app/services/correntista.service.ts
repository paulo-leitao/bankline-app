import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://pleitao-dio-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor( private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/correntista`);
  }

}