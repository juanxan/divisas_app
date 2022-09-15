import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { LoadingController } from '@ionic/angular';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {
  formularioIngreso: FormGroup;
  bancos: string[] = ['Banco Caja Social','Davivienda','Banco de Bogota','Bancolombia','BBVA',
  'Banco de Occidente','Scotiabank Colpatria','Banco AV Villas','Nequi','Daviplata','Movii'];
  banco: string;
  tipoCuentas: string[]=['Corriente','Ahorros'];
  balance: number;
  document: string;
  sure: boolean;
  validationMessages = {
    bank: [
      {
        type: 'required', message: 'El banco es requerido'
      }
    ],
    tipoCuenta: [
      {
        type: 'required', message: 'El tipo de Cuenta es requerido'
      }
    ],
    numeroCuenta: [
      {
        type: 'required', message: 'El tipo de Cuenta es requerido'
      },
      {
        type: 'minlength', message: 'Tamaño minimo 10 caracteres'
      }
    ],
    balance: [
        {
          type: 'required', message: 'El valor es requerido'
        },
        {
          type: 'pattern', message: 'No permite numeros negativos y valores mayores a 10 digitos'
        }],
  };
  constructor(private alertController: AlertController,private fb: FormBuilder,private api: TransaccionService, private router: Router) {
    this.formularioIngreso = this.fb.group({
      bank: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      tipoCuenta: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
      numeroCuenta:new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]
      ),
      balance: new FormControl(
        '',
        Validators.compose([Validators.required,  Validators.pattern('[0-9]{1,10}')])
      )
    });
   }

  ngOnInit() {
  }

  ingreso(form){
    this.document =  localStorage.getItem('document');
    const data = form;
    data.document = this.document;
      this.api.ingresos(data).subscribe(datas =>{
        const dataResponse: any = datas;
        console.log(dataResponse);
      });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'This is an alert!',
      buttons: ['Vuelve a intentar, por favor!'],
    });

    await alert.present();
  }
  async presentSure(form) {
    const alert = await this.alertController.create({
      header: 'Deseas continuar?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.ingreso(form);
          },
        },
      ],
    });

    await alert.present();
  }
}
