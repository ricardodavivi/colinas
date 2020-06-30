import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RogattePageRoutingModule } from './rogatte-routing.module';

import { RogattePage } from './rogatte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RogattePageRoutingModule
  ],
  declarations: [RogattePage]
})
export class RogattePageModule {}
