import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JdPageRoutingModule } from './jd-routing.module';

import { JdPage } from './jd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JdPageRoutingModule
  ],
  declarations: [JdPage]
})
export class JdPageModule {}
