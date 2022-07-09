import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:3000/users/login';

  constructor(private http: HttpClient) { }

  loginByUser(form){
    const direccion = this.url;
    return this.http.post(direccion,form);
  }
}
