import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas.service';
@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.page.html',
  styleUrls: ['./divisas.page.scss'],
})
export class DivisasPage implements OnInit {
  divisas: any;
  historiales: any;

  constructor(public divisaService: DivisasService) { }
  ngOnInit() {
    this.getDivisa();
  }

  getDivisa(){
    this.divisaService.getDivisas().subscribe(divisa => {
      this.divisas = divisa;
    });
  }
  changeValue(val){
    const result = this.divisas;
    console.log(result);
    const valor = val;
    const USD = result.conversion_rates.USD * val;
    const GBP = result.conversion_rates.GBP * val;
    const EUR = result.conversion_rates.EUR * val;
    const CAD = result.conversion_rates.CAD * val;
    const JPY = result.conversion_rates.JPY * val;
    const BRL = result.conversion_rates.BRL * val;
    const MXN = result.conversion_rates.MXN * val;
    const RUB = result.conversion_rates.RUB * val;
    const valDivisas= [
    {
      name: 'Dolar',
      img: 'dolar',
      val: USD.toFixed(5)
    },
    {
      name: 'Libra Esterlina',
      img: 'libraesterlina',
      val: GBP
    },
    {
      name: 'Euro',
      img: 'alemania',
      val: EUR
    },
    {
      name: 'Dolar Canadiense',
      img: 'canada',
      val: CAD
    },
    {
      name: 'YEN',
      img: 'japon',
      val: JPY
    },
    {
      name: 'Real Brasileño',
      img: 'brazil',
      val: BRL
    },
    {
      name: 'Peso Mexicano',
      img: 'mexico',
      val: MXN
    },
    {
      name: 'Rublo Ruso',
      img: 'rusia',
      val: RUB
    },
  ];
  this.historiales = valDivisas;
  }
}
