import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historial } from '../models/transacciones.model';
@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  url='https://ecotreesoft-divisas.herokuapp.com/users';
  constructor(private http: HttpClient) { }

  ingresos(form){
    const document =  localStorage.getItem('document');
    const direccion = this.url + '/topUpBalance/' + document;
    console.log(direccion);
    return this.http.post(direccion,form);
  }
  historyTrans(): Observable<Historial[]>{
    const id =  localStorage.getItem('user');
    const direccion = this.url + '/historyTransactions?id=' + id;
    console.log(direccion);
    return this.http.get<Historial[]>(direccion);
  }
  transfer(form){
    const document =  localStorage.getItem('document');
    const direccion = this.url + '/transfer/' + document;
    return this.http.post(direccion,form);
  }
}
