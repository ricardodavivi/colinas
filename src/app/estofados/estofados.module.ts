import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstofadosPageRoutingModule } from './estofados-routing.module';

import { EstofadosPage } from './estofados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstofadosPageRoutingModule
  ],
  declarations: [EstofadosPage]
})
export class EstofadosPageModule {}
