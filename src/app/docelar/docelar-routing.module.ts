import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocelarPage } from './docelar.page';

const routes: Routes = [
  {
    path: '',
    component: DocelarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocelarPageRoutingModule {}
