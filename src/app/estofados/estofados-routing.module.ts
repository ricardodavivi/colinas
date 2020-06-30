import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstofadosPage } from './estofados.page';

const routes: Routes = [
  {
    path: '',
    component: EstofadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstofadosPageRoutingModule {}
