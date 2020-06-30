import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlessandraPageRoutingModule } from './alessandra-routing.module';

import { AlessandraPage } from './alessandra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlessandraPageRoutingModule
  ],
  declarations: [AlessandraPage]
})
export class AlessandraPageModule {} 
