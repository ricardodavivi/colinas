import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuriangoPage } from './kuriango.page';

const routes: Routes = [
  {
    path: '',
    component: KuriangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuriangoPageRoutingModule {}
