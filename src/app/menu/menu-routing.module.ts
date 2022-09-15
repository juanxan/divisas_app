import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {path: 'home',loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {
        path: 'perfil',loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'politicas',
        loadChildren: () => import('../politicas/politicas.module').then( m => m.PoliticasPageModule)
      },
      {
        path: 'terminos',
        loadChildren: () => import('../terminos/terminos.module').then( m => m.TerminosPageModule)
      },
      {
        path: 'transacciones',
        loadChildren: () => import('../transacciones/transacciones.module').then( m => m.TransaccionesPageModule)
      },
      {
        path: 'ingresos',
        loadChildren: () => import('../transaccion/ingresos/ingresos.module').then( m => m.IngresosPageModule)
      },
      {
        path: 'salidas',
        loadChildren: () => import('../transaccion/salidas/salidas.module').then( m => m.SalidasPageModule)
      },
      {
        path: 'transaccion',
        loadChildren: () => import('../transaccion/transaccion/transaccion.module').then( m => m.TransaccionPageModule)
      }
      ,
      {
        path: 'divisas',
        loadChildren: () => import('../transaccion/divisas/divisas.module').then( m => m.DivisasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
