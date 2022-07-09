import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  exports:[
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
