import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string;
  password: string;
  last_name: string;
  nationality: string;
  date_birth: string;
  document: string;
  issuance_document: string;
  stratum: string;
  email: string;
  num: string;
  gender: string[]=['Masculino','Femenino','Indefinido'];
  estrato: string[]=['1','2','3','4','5','6'];
  genero: string;
  val: boolean;
  constructor() { }

  ngOnInit() {
  }
  signIn(){
    const datos = {
      name: this.name,
      pass:this.password,
      last_name: this.last_name,
      nationality:  this.nationality,
      date_birth: this.date_birth,
      document: this.document,
      issuance_document: this.issuance_document,
      stratum: this.stratum,
      email: this.email,
      num: this.num,
      gender: this.genero
    };
    console.log(datos);
  }
  cambiarTipo(){
    const elemento: any= document.getElementById('password');
    const icon: any= document.getElementById('icon');
    if(this.val === false){
      elemento.type = 'password';
      icon.name = 'eye-off-outline';
      this.val=true;
    }else{
      elemento.type = 'text';
      icon.name = 'eye-outline';
      this.val=false;
    }
  }

}
