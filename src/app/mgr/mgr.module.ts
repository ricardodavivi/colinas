import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MgrPageRoutingModule } from './mgr-routing.module';

import { MgrPage } from './mgr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MgrPageRoutingModule
  ],
  declarations: [MgrPage]
})
export class MgrPageModule {}
