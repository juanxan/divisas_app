import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  url='https://ecotreesoft-divisas.herokuapp.com/users/balance/';

  constructor(private http: HttpClient) { }

  balance(): Observable<any>{
    const direccion = this.url;
    const id =  localStorage.getItem('user');
    return this.http.get<any>(direccion+id);
  }
}
