import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CepComponent } from './cep.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: CepComponent,
        data: {
            title: 'Cep'
        },
    }, {
        path: ':id',
        component: CepComponent,
        data: {
            title: 'Cep',
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
export class CepRoutingModule { }
