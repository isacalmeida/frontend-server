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
            }
//            {
//                path: 'perfil',
//                data: {
//                    title: 'Perfil',
//                    titleTag: 'ACE0001'
//                },
//                loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
//            }
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
