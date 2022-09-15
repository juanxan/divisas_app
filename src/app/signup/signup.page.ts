import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  genders: string[]=['Masculino','Femenino','Indefinido'];
  val: boolean;
  validationMessages = {
    name: [
      {
        type: 'required', message: 'El nombre es requerido'
      }
    ],
    last_name: [
      {
        type: 'required', message: 'El apellido es requerido'
      }
    ],
    nationality: [
      {
        type: 'required', message: 'la nacionalidad es requerido'
      }
    ],
    date_birth: [
      {
        type: 'required', message: 'la fecha de nacimiento es requerido'
      }
    ],
    document: [
      {
        type: 'required', message: 'El documento es requerido'
      }
    ],
    email: [
      {
        type: 'required', message: 'El email es requerido'
      },
      {
        type: 'pattern', message: 'El email es incorrecto'
      }],
      num: [
        {
          type: 'required', message: 'El numero de telefono es requerido'
        }
      ],
      gender: [
        {
          type: 'required', message: 'El genero es requerido'
        }
      ],
      password: [
        {
          type: 'required', message: 'El password es requerido'
        },
        {
          type: 'minlength', message: 'Tamaño minimo 5 caracteres'
        }],
  };
  formularioSignup: FormGroup;
  constructor(private fb: FormBuilder,private api: LoginService, private router: Router,private loadingCtrl: LoadingController) {
    this.formularioSignup = this.fb.group({
      name: ['',[
        Validators.required
      ]],
      last_name: ['',[
        Validators.required
      ]],
      nationality: ['',[
        Validators.required
      ]],
      date_birth: ['',[
        Validators.required
      ]],
      document: ['',[
        Validators.required
      ]],
      num: ['',[
        Validators.required
      ]],
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      pass: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      gender: ['',[
        Validators.required
      ]],
    });
   }

  ngOnInit() {
  }
  signIn(form){
      this.showLoading();
      this.api.signup(form).subscribe(data =>{
        this.loadingCtrl.dismiss();
      const dataResponse: any = data;
      this.router.navigate(['intro']);
    });
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
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Creando Usuario...',
      //duration: 3000,
      //translucent: true,
      //cssClass: 'custom-class custom-loading'
    });

    return await loading.present();
  }
}

