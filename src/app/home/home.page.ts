import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  balances = {
    balance : 0
  };
  constructor(private api: BalanceService) {}

  ngOnInit() {
    this.traerSaldo();
  }
  traerSaldo(){
    this.api.balance().subscribe(data =>{
      this.balances = data;
    });
  }
}
