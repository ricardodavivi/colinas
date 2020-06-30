import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FernandesPageRoutingModule } from './fernandes-routing.module';

import { FernandesPage } from './fernandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FernandesPageRoutingModule
  ],
  declarations: [FernandesPage]
})
export class FernandesPageModule {}
