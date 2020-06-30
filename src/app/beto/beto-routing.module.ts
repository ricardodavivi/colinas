import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetoPage } from './beto.page';

const routes: Routes = [
  {
    path: '',
    component: BetoPage
  },
  {
    path: 'carrinhobeto',
    loadChildren: () => import('./carrinhobeto/carrinhobeto.module').then( m => m.CarrinhobetoPageModule)
  },
  {
    path: 'foto',
    loadChildren: () => import('./foto/foto.module').then( m => m.FotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetoPageRoutingModule {}
