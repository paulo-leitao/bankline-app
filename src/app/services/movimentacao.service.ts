import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Endereço na url da nossa API local ou remota (heroku)
// const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://pleitao-dio-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor( private http: HttpClient) { }


  // Método de requisição get via api 
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao`);
  }

  // Método de requisição com filtro por IdConta
  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao/${idConta}`)
  }
  
  // Método de inclusão post via api
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacao`, movimentacao);
  }
}
