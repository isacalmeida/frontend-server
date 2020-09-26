import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaComponent } from './pessoa.component';

const routes: Routes = [{
  path: '',
  component: PessoaComponent,
  children: [{
    path: '',
    data: {
      title: 'Pessoa'
    },
    loadChildren: () => import('./menu-pessoa/menu-pessoa.module').then(m => m.MenuPessoaModule)
  }, {
    path: 'pessoa-fisica',
    data: {
      title: 'Pessoa Fisica'
    },
    loadChildren: () => import('./pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
