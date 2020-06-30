import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovafarmaPage } from './novafarma.page';

const routes: Routes = [
  {
    path: '',
    component: NovafarmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovafarmaPageRoutingModule {}
