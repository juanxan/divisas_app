import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Historial } from 'src/app/models/transacciones.model';
@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {
  historiales: Historial[];
  constructor(private api: TransaccionService) { }

  ngOnInit() {
    this.historialTransacciones();
  }
  historialTransacciones(){
    this.api.historyTrans().subscribe(data =>{
      console.log(data);
      this.historiales = data;
    });
  }
}
