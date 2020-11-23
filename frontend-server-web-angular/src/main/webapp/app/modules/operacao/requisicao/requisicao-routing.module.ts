import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisicaoComponent } from './requisicao.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: RequisicaoComponent,
        data: {
            title: 'Requisição'
        },
    }, {
        path: ':id',
        component: RequisicaoComponent,
        data: {
            title: 'Requisição',
            breadcrumbs: ':id'
        }
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequisicaoRoutingModule { }
