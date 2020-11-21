import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemConfiguracaoComponent } from './item-configuracao.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ItemConfiguracaoComponent,
        data: {
            title: 'Item Configuracao'
        },
    }, {
        path: ':id',
        component: ItemConfiguracaoComponent,
        data: {
            title: 'Item Configuracao',
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
export class ItemConfiguracaoRoutingModule { }
