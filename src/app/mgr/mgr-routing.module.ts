import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MgrPage } from './mgr.page';

const routes: Routes = [
  {
    path: '',
    component: MgrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MgrPageRoutingModule {}
