import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RogattePage } from './rogatte.page';

const routes: Routes = [
  {
    path: '',
    component: RogattePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RogattePageRoutingModule {}
