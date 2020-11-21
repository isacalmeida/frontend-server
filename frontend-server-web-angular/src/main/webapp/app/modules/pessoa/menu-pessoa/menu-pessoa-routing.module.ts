import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPessoaComponent } from './menu-pessoa.component';

const routes: Routes = [
    {
        path: '',
        component: MenuPessoaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuPessoaRoutingModule { }
