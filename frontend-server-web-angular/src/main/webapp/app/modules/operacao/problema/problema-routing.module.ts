import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemaComponent } from './problema.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ProblemaComponent,
        data: {
            title: 'Problema'
        },
    }, {
        path: ':id',
        component: ProblemaComponent,
        data: {
            title: 'Problema',
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
export class ProblemaRoutingModule { }
