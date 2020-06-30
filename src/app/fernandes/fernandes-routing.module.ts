import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FernandesPage } from './fernandes.page';

const routes: Routes = [
  {
    path: '',
    component: FernandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FernandesPageRoutingModule {}
