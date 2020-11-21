import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { EstadoComponent } from './estado.component';

const routes: Routes = [
    {
        path: '',
        component: EstadoComponent,
        data: {
            title: 'Estado'
        },
    }, {
        path: ':id',
        component: EstadoComponent,
        data: {
            title: 'Estado',
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
export class EstadoRoutingModule { }
