import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from 'src/app/services/balance.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { LoadingController } from '@ionic/angular';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss'],
})
export class SalidasPage implements OnInit {
  balances = {
    balance : 0
  };
  value = 0;
  documento = 0;
  document: string;
  validarSaldo: boolean;
  formularioSalida: FormGroup;
  validationMessages = {
    value: [
      {
        type: 'required', message: 'El banco es requerido'
      }
    ],
    document: [
      {
        type: 'required', message: 'El tipo de Cuenta es requerido'
      }
    ]};
  constructor(private alertController: AlertController,private fb: FormBuilder,private api: BalanceService,
  private ts: TransaccionService, private router: Router,private loadingCtrl: LoadingController) {
    this.formularioSalida = this.fb.group({
      value: new FormControl(
        '',[
          Validators.required
        ]
      ),
      document: new FormControl(
        '',[
          Validators.required
        ]
      )
    });
    }

  ngOnInit() {
    this.traerSaldo();
  }
  traerSaldo(){
    this.api.balance().subscribe(data =>{
      this.balances = data;
    });
  }
  changeValue(event: any){
    const validarSaldos = event > this.balances.balance ? true : false;
    this.validarSaldo = validarSaldos;
    if(this.validarSaldo){
      console.log('entro');
      console.log(this.value);
      console.log(this.balances.balance);
      this.value = this.balances.balance;
      this.validarSaldo = false;
    }
  }
  enviarDinero(form){
    if(this.validarSaldo){
      return;
    }else{
      const data = {balance: this.value,
      document2: this.document,
      bank: 0
    };
    this.showLoading();
      this.ts.transfer(data).subscribe(datas =>{
        this.loadingCtrl.dismiss();
        this.router.navigate(['/menu/home']);
      });
    }
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Enviando Dinero...',
      //duration: 3000,
      //translucent: true,
      //cssClass: 'custom-class custom-loading'
    });

    return await loading.present();
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
            this.enviarDinero(form);
          },
        },
      ],
    });

    await alert.present();
  }
}
