import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoComponent } from './evento.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: EventoComponent,
        data: {
            title: 'Evento'
        },
    }, {
        path: ':id',
        component: EventoComponent,
        data: {
            title: 'Evento',
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
export class EventoRoutingModule { }
