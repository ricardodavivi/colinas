import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocelarPageRoutingModule } from './docelar-routing.module';

import { DocelarPage } from './docelar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocelarPageRoutingModule
  ],
  declarations: [DocelarPage]
})
export class DocelarPageModule {} 
