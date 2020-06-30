import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JdPage } from './jd.page';

const routes: Routes = [
  {
    path: '',
    component: JdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JdPageRoutingModule {}
