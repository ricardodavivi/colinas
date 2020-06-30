import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucianoPageRoutingModule } from './luciano-routing.module';

import { LucianoPage } from './luciano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucianoPageRoutingModule
  ],
  declarations: [LucianoPage]
})
export class LucianoPageModule {} 
