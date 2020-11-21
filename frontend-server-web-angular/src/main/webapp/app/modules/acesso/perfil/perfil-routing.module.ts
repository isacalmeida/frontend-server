import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
    {
        path: '',
        component: PerfilComponent,
        data: {
            title: 'Pessoa Fisica'
        },
    }, {
        path: ':id',
        component: PerfilComponent,
        data: {
            title: 'Pessoa Fisica',
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
export class PerfilRoutingModule { }
