import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  url= 'https://ecotreesoft-divisas.herokuapp.com/users/currency_list';
  url1= 'https://v6.exchangerate-api.com/v6/e1fb2a5953edbe689c1af854/latest/COP';

  constructor(private http: HttpClient) { }

  getDivisasAut(){
    const id =  localStorage.getItem('user');
    const direccion = this.url + '/' + id;
    return this.http.get(direccion);
  }
  getDivisas(){
    const direccion = this.url1 ;
    return this.http.get(direccion);
  }


}
