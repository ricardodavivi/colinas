import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovafarmaPageRoutingModule } from './novafarma-routing.module';

import { NovafarmaPage } from './novafarma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovafarmaPageRoutingModule
  ],
  declarations: [NovafarmaPage]
})
export class NovafarmaPageModule {}
