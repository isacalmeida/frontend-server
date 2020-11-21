import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConfiguracaoComponent } from './menu-configuracao.component';

const routes: Routes = [
    {
        path: '',
        component: MenuConfiguracaoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuConfiguracaoRoutingModule { }
