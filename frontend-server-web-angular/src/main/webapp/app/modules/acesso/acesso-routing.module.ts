import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/archicteture/pages/page-not-found/page-not-found.component';

import { AcessoComponent } from './acesso.component';

const routes: Routes = [
    {
        path: '',
        component: AcessoComponent,
        children: [
            {
                path: '',
                data: {
                    title: 'Acesso'
                },
                loadChildren: () => import('./menu-acesso/menu-acesso.module').then(m => m.MenuAcessoModule)
            },
            {
                path: 'perfil',
                data: {
                    title: 'Perfil',
                    titleTag: 'ACE0001'
                },
                loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
            }, {
                path: 'usuario',
                data: {
                    title: 'Usuário',
                    titleTag: 'ACE0002'
                },
                loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
            }, {
                path: 'programa',
                data: {
                    title: 'Programa',
                    titleTag: 'ACE0003'
                },
                loadChildren: () => import('./programa/programa.module').then(m => m.ProgramaModule)
            }
        ]
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcessoRoutingModule { }
