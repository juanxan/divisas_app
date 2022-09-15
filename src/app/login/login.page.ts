import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoadingController,AlertController } from '@ionic/angular';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogged: boolean;
  val: boolean;
  formularioLogin: FormGroup;
  validationMessages = {
    email: [
      {
        type: 'required', message: 'El email es requerido'
      },
      {
        type: 'pattern', message: 'El email es incorrecto'
      }],
      password: [
        {
          type: 'required', message: 'El password es requerido'
        },
        {
          type: 'minlength', message: 'Tamaño minimo 5 caracteres'
        }],
  };
  constructor(private alertController: AlertController,
    private fb: FormBuilder, private api: LoginService, private router: Router,private loadingCtrl: LoadingController)
  {
    this.formularioLogin = this.fb.group({
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
      )
    });
   }

  ngOnInit() {
  }
  signUp(form){
    this.showLoading();
     this.api.loginByUser(form).subscribe(data =>{
      console.log(data);
       const dataResponse: any = data;
       if(dataResponse.response){
          localStorage.setItem('token',dataResponse.token);
          localStorage.setItem('document',dataResponse.rows[0].document);
          localStorage.setItem('user',dataResponse.rows[0].id);
          localStorage.setItem('rol',dataResponse.rows[0].rol);
          localStorage.setItem('isIntoShowed','true');
          this.router.navigate(['menu/home']);
       }else{
          this.presentAlert(dataResponse.mensaje);
       }
       this.loadingCtrl.dismiss();
     });
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando Sesion...',
      //duration: 3000,
      //translucent: true,
      //cssClass: 'custom-class custom-loading'
    });

    return await loading.present();
  }
  async presentAlert(mensaje: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      cssClass: 'custom-alert',
      buttons: ['Aceptar'],
    });

    await alert.present();
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
