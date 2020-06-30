import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlaviaPageRoutingModule } from './flavia-routing.module';

import { FlaviaPage } from './flavia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlaviaPageRoutingModule
  ],
  declarations: [FlaviaPage]
})
export class FlaviaPageModule {} 
