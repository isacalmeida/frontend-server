import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidenteComponent } from './incidente.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: IncidenteComponent,
        data: {
            title: 'Incidente'
        },
    }, {
        path: ':id',
        component: IncidenteComponent,
        data: {
            title: 'Incidente',
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
export class IncidenteRoutingModule { }
