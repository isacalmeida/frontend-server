import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuOperacaoComponent } from './menu-operacao.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MenuOperacaoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuOperacaoRoutingModule { }
