import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmporioPage } from './emporio.page';

const routes: Routes = [
  {
    path: '',
    component: EmporioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmporioPageRoutingModule {}
