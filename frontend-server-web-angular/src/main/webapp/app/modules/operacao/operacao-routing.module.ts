import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/archicteture/pages/page-not-found/page-not-found.component';

import { OperacaoComponent } from './operacao.component';

const routes: Routes = [
    {
        path: '',
        component: OperacaoComponent,
        children: [
            {
                path: '',
                data: {
                    title: 'Operacao'
                },
                loadChildren: () => import('./menu-operacao/menu-operacao.module').then(m => m.MenuOperacaoModule)
            }, {
                path: 'erro-conhecido',
                data: {
                    title: 'Erro Conhecido',
                    titleTag: 'OPE0001'
                },
                loadChildren: () => import('./erro-conhecido/erro-conhecido.module').then(m => m.ErroConhecidoModule)
            }, {
                path: 'evento',
                data: {
                    title: 'Evento',
                    titleTag: 'OPE0002'
                },
                loadChildren: () => import('./evento/evento.module').then(m => m.EventoModule)
            }, {
                path: 'incidente',
                data: {
                    title: 'Incidente',
                    titleTag: 'OPE0003'
                },
                loadChildren: () => import('./incidente/incidente.module').then(m => m.IncidenteModule)
            }, {
                path: 'problema',
                data: {
                    title: 'Problema',
                    titleTag: 'OPE0004'
                },
                loadChildren: () => import('./problema/problema.module').then(m => m.ProblemaModule)
            }, {
                path: 'requisicao',
                data: {
                    title: 'Requisição',
                    titleTag: 'OPE0005'
                },
                loadChildren: () => import('./requisicao/requisicao.module').then(m => m.RequisicaoModule)
            }
        ]
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OperacaoRoutingModule { }
