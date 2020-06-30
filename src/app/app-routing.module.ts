import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: 'signin',   pathMatch: 'full' },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'edit',  loadChildren: () => import('./produtos/edit/edit.module').then( m => m.EditPageModule)},
  { path: 'list', loadChildren: () => import('./produtos/list/list.module').then( m => m.ListPageModule)},
  { path: 'reset', loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)},
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)},
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)},
  { path: 'boutique',  loadChildren: () => import('./boutique/boutique.module').then( m => m.BoutiquePageModule) },
  { path: 'emporio',  loadChildren: () => import('./emporio/emporio.module').then( m => m.EmporioPageModule)},
  { path: 'novafarma', loadChildren: () => import('./novafarma/novafarma.module').then( m => m.NovafarmaPageModule)},
  { path: 'kuriango', loadChildren: () => import('./kuriango/kuriango.module').then( m => m.KuriangoPageModule)},
  { path: 'fernandes', loadChildren: () => import('./fernandes/fernandes.module').then( m => m.FernandesPageModule)},
  { path: 'mgr', loadChildren: () => import('./mgr/mgr.module').then( m => m.MgrPageModule)},
  { path: 'paodemel', loadChildren: () => import('./paodemel/paodemel.module').then( m => m.PaodemelPageModule)},
  { path: 'jd', loadChildren: () => import('./jd/jd.module').then( m => m.JdPageModule)},
  { path: 'beto', loadChildren: () => import('./beto/beto.module').then( m => m.BetoPageModule)},
  { path: 'carrinhobeto', loadChildren: () => import('./beto/carrinhobeto/carrinhobeto.module').then( m => m.CarrinhobetoPageModule)},
  { path: 'bike', loadChildren: () => import('./bike/bike.module').then( m => m.BikePageModule)},
  { path: 'rogatte', loadChildren: () => import('./rogatte/rogatte.module').then( m => m.RogattePageModule)},
  { path: 'estofados', loadChildren: () => import('./estofados/estofados.module').then( m => m.EstofadosPageModule)},
  { path: 'teclider', loadChildren: () => import('./teclider/teclider.module').then( m => m.TecliderPageModule)},
  { path: 'luciano', loadChildren: () => import('./luciano/luciano.module').then( m => m.LucianoPageModule)},
  { path: 'flavia', loadChildren: () => import('./flavia/flavia.module').then( m => m.FlaviaPageModule)},
  { path: 'delicias', loadChildren: () => import('./delicias/delicias.module').then( m => m.DeliciasPageModule)},
  { path: 'docelar', loadChildren: () => import('./docelar/docelar.module').then( m => m.DocelarPageModule)},
  { path: 'alessandra', loadChildren: () => import('./alessandra/alessandra.module').then( m => m.AlessandraPageModule)},
  { path: 'privacidade', loadChildren: () => import('./privacidade/privacidade.module').then( m => m.PrivacidadePageModule)},
  { path: 'megapromocao', loadChildren: () => import('./megapromocao/megapromocao.module').then( m => m.MegapromocaoPageModule) },





];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule {}
