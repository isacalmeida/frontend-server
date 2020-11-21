import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/archicteture/pages/page-not-found/page-not-found.component';

import { TransicaoComponent } from './transicao.component';

const routes: Routes = [
    {
        path: '',
        component: TransicaoComponent,
        children: [
            {
                path: '',
                data: {
                    title: 'Transição'
                },
                loadChildren: () => import('./menu-transicao/menu-transicao.module').then(m => m.MenuTransicaoModule)
            }, {
                path: 'item-configuracao',
                data: {
                    title: 'Item de Configuração',
                    titleTag: 'TRA0001'
                },
                loadChildren: () => import('./item-configuracao/item-configuracao.module').then(m => m.ItemConfiguracaoModule)
            }, {
                path: 'mudanca',
                data: {
                    title: 'Mudança',
                    titleTag: 'TRA0002'
                },
                loadChildren: () => import('./mudanca/mudanca.module').then(m => m.MudancaModule)
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
export class TransicaoRoutingModule { }
