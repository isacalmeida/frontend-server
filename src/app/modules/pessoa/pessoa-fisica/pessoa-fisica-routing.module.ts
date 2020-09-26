import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaFisicaComponent } from './pessoa-fisica.component';

const routes: Routes = [{
  path: '',
  component: PessoaFisicaComponent,
  children: [{
    path: 'novo',
    data: {
      title: 'Pessoa Fisica',
      breadcrumbs: 'Novo'
    },
    component: PessoaFisicaComponent
  }, {
    path: ':id/editar',
    data: {
      title: 'Pessoa Fisica',
      breadcrumbs: 'Editar :id'
    },
    component: PessoaFisicaComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaFisicaRoutingModule { }
