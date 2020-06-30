import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaodemelPageRoutingModule } from './paodemel-routing.module';

import { PaodemelPage } from './paodemel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaodemelPageRoutingModule
  ],
  declarations: [PaodemelPage]
})
export class PaodemelPageModule {}
