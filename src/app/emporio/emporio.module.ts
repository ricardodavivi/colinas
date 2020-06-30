import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmporioPageRoutingModule } from './emporio-routing.module';

import { EmporioPage } from './emporio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmporioPageRoutingModule
  ],
  declarations: [EmporioPage]
})
export class EmporioPageModule {}
