import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KuriangoPageRoutingModule } from './kuriango-routing.module';

import { KuriangoPage } from './kuriango.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KuriangoPageRoutingModule
  ],
  declarations: [KuriangoPage]
})
export class KuriangoPageModule {}
