import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErroConhecidoComponent } from './erro-conhecido.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ErroConhecidoComponent,
        data: {
            title: 'Erro Conhecido'
        },
    }, {
        path: ':id',
        component: ErroConhecidoComponent,
        data: {
            title: 'Erro Conhecido',
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
export class ErroConhecidoRoutingModule { }
