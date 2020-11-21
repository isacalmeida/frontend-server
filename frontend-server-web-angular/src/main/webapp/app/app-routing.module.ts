import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/core/login/login.component';
import { AuthGuard } from './modules/core/utils/auth.guard';
import { IndexComponent } from './modules/index/index.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard'
        },
        children: [
            {
                path: '',
                component: IndexComponent,
                canActivate: [AuthGuard],
            }, {
                path: 'acesso',
                data: {
                    title: 'Menu Acesso'
                },
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/acesso/acesso.module').then(m => m.AcessoModule)
            }, {
                path: 'operacao',
                data: {
                    title: 'Menu Operação'
                },
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/operacao/operacao.module').then(m => m.OperacaoModule)
            }, {
                path: 'pessoa',
                data: {
                    title: 'Menu Pessoa'
                },
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/pessoa/pessoa.module').then(m => m.PessoaModule)
            }, {
                path: 'transicao',
                data: {
                    title: 'Menu Transição'
                },
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/transicao/transicao.module').then(m => m.TransicaoModule)
            }, {
                path: 'configuracao',
                data: {
                    title: 'Menu Configuração'
                },
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/configuracao/configuracao.module').then(m => m.ConfiguracaoModule)
            }
        ]
    }, {
        path: 'login',
        data: {
            title: 'Login'
        },
        component: LoginComponent
    }, {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
