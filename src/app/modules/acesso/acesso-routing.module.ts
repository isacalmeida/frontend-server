import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoComponent } from './acesso.component';

const routes: Routes = [{
  path: '',
  component: AcessoComponent,
  children: [{
    path: '',
    data: {
      title: 'Acesso'
    },
    loadChildren: () => import('./menu-acesso/menu-acesso.module').then(m => m.MenuAcessoModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
