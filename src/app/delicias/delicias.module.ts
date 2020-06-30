import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliciasPageRoutingModule } from './delicias-routing.module';

import { DeliciasPage } from './delicias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliciasPageRoutingModule
  ],
  declarations: [DeliciasPage]
})
export class DeliciasPageModule {} 
