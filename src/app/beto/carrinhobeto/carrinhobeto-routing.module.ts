import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhobetoPage } from './carrinhobeto.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhobetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhobetoPageRoutingModule {}
