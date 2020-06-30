import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetoPageRoutingModule } from './beto-routing.module';

import { BetoPage } from './beto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetoPageRoutingModule
  ],
  declarations: [BetoPage]
})
export class BetoPageModule {}
