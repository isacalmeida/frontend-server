import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAcessoComponent } from './menu-acesso.component';

const routes: Routes = [{
  path: '',
  component: MenuAcessoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuAcessoRoutingModule { }
