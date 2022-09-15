import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://ecotreesoft-divisas.herokuapp.com/users';

  constructor(private http: HttpClient) { }

  loginByUser(form){
    const direccion = this.url + '/login';
    return this.http.post(direccion,form);
  }
  signup(form): Observable<User[]>{
    const direccion = this.url + '/register';
    return this.http.post<User[]>(direccion,form);
  }
  getUser(){
    const id =  localStorage.getItem('document');
    const direccion = this.url + '/profile/'+id;
    return this.http.get(direccion);
  }

}
