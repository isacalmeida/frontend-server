import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { PessoaJuridicaComponent } from './pessoa-juridica.component';

const routes: Routes = [
    {
        path: '',
        component: PessoaJuridicaComponent,
        data: {
            title: 'Pessoa Juridica'
        },
    }, {
        path: ':id',
        component: PessoaJuridicaComponent,
        data: {
            title: 'Pessoa Juridica',
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
export class PessoaJuridicaRoutingModule { }
