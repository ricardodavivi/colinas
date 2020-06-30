import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhobetoPageRoutingModule } from './carrinhobeto-routing.module';

import { CarrinhobetoPage } from './carrinhobeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhobetoPageRoutingModule
  ],
  declarations: [CarrinhobetoPage]
})
export class CarrinhobetoPageModule {}
