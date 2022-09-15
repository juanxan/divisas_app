import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisasPage } from './divisas.page';

const routes: Routes = [
  {
    path: '',
    component: DivisasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisasPageRoutingModule {}
