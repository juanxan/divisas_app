import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ResponseI } from '../../modelo/response.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  isLogged: boolean;
  constructor(private api: LoginService, private router: Router) { }

  ngOnInit() {
  }
  signUp(){
    const datos = {email: this.email,pass:this.password};
     this.api.loginByUser(datos).subscribe(data =>{
       const dataResponse: any = data;
       console.log(data);
       if(dataResponse.response){
          localStorage.setItem('token',dataResponse.token);
          localStorage.setItem('user',dataResponse.rows[0].id);
          localStorage.setItem('rol',dataResponse.rows[0].rol);
          this.router.navigate(['dashboard']);
       }
     });
  }
}
