import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegapromocaoPageRoutingModule } from './megapromocao-routing.module';

import { MegapromocaoPage } from './megapromocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MegapromocaoPageRoutingModule
  ],
  declarations: [MegapromocaoPage]
})
export class MegapromocaoPageModule {}
