import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/index/index.component';
import { MenuPessoaComponent } from './modules/pessoa/menu-pessoa/menu-pessoa.component';
import { MenuAcessoComponent } from './modules/acesso/menu-acesso/menu-acesso.component';


const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  },
  {
    path: 'menu',
    data: {
      title: 'Menu'
    },
    children: [
      {
        path: 'acesso',
        data: {
          tile: 'Acesso'
        },
        component: MenuAcessoComponent
      },
      {
        path: 'pessoa',
        data: {
          tile: 'Pessoa'
        },
        component: MenuPessoaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
