import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlessandraPage } from './alessandra.page';

const routes: Routes = [
  {
    path: '',
    component: AlessandraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlessandraPageRoutingModule {}
