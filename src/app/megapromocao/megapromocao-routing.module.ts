import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MegapromocaoPage } from './megapromocao.page';

const routes: Routes = [
  {
    path: '',
    component: MegapromocaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegapromocaoPageRoutingModule {}
