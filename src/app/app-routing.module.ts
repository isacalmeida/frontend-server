import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/index/index.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Dashboard'
  },
  children: [{
    path: '',
    component: IndexComponent
  }]
}, {
  path: 'acesso',
  data: {
    title: 'Menu',
    description: 'Acesso'
  },
  loadChildren: () => import('./modules/acesso/acesso.module').then(m => m.AcessoModule)
}, {
  path: 'pessoa',
  data: {
    title: 'Menu',
    description: 'Pessoa'
  },
  loadChildren: () => import('./modules/pessoa/pessoa.module').then(m => m.PessoaModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
