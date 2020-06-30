import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecliderPageRoutingModule } from './teclider-routing.module';

import { TecliderPage } from './teclider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecliderPageRoutingModule
  ],
  declarations: [TecliderPage]
})
export class TecliderPageModule {}
