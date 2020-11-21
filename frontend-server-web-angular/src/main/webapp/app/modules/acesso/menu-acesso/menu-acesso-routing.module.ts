import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAcessoComponent } from './menu-acesso.component';
import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: MenuAcessoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuAcessoRoutingModule { }
