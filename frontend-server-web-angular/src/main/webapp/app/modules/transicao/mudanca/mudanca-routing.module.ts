import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { MudancaComponent } from './mudanca.component';

const routes: Routes = [
    {
        path: '',
        component: MudancaComponent,
        data: {
            title: 'Mudança'
        },
    }, {
        path: ':id',
        component: MudancaComponent,
        data: {
            title: 'Mudança',
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
export class MudancaRoutingModule { }
