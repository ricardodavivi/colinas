import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucianoPage } from './luciano.page';

const routes: Routes = [
  {
    path: '',
    component: LucianoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucianoPageRoutingModule {}
