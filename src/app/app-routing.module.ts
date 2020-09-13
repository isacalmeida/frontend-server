import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/index/index.component';
import { MenuPessoaComponent } from './modules/pessoa/menu-pessoa/menu-pessoa.component';
import { MenuAcessoComponent } from './modules/acesso/menu-acesso/menu-acesso.component';
import { PessoaFisicaComponent } from './modules/pessoa/pessoas/pessoa-fisica/pessoa-fisica.component';


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
          title: 'Acesso'
        },
        component: MenuAcessoComponent
      },
      {
        path: 'pessoa',
        data: {
          title: 'Pessoa'
        },
        component: MenuPessoaComponent
      }
    ]
  },
  {
    path: 'pessoa',
    data: {
      title: 'Pessoa'
    },
    children: [
      {
        path: 'pessoa-fisica',
        data: {
          title: 'Pessoa Fisica'
        },
        component: PessoaFisicaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
