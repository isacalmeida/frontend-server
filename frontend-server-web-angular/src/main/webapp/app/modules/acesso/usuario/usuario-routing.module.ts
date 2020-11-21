import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
    {
        path: '',
        component: UsuarioComponent,
        data: {
            title: 'Usuario'
        },
    }, {
        path: ':id',
        component: UsuarioComponent,
        data: {
            title: 'Usuario',
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
export class UsuarioRoutingModule { }
