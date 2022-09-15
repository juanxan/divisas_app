import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisasPageRoutingModule } from './divisas-routing.module';

import { DivisasPage } from './divisas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisasPageRoutingModule
  ],
  declarations: [DivisasPage]
})
export class DivisasPageModule {}
