import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { ProgramaComponent } from './programa.component';

const routes: Routes = [
    {
        path: '',
        component: ProgramaComponent,
        data: {
            title: 'Programa'
        },
    }, {
        path: ':id',
        component: ProgramaComponent,
        data: {
            title: 'Programa',
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
export class ProgramaRoutingModule { }
