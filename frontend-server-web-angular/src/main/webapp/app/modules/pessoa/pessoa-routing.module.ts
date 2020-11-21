import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/archicteture/pages/page-not-found/page-not-found.component';

import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
    {
        path: '',
        component: PessoaComponent,
        children: [
            {
                path: '',
                data: {
                    title: 'Pessoa'
                },
                loadChildren: () => import('./menu-pessoa/menu-pessoa.module').then(m => m.MenuPessoaModule)
            }, {
                path: 'pessoa-fisica',
                data: {
                    title: 'Pessoa Física',
                    titleTag: 'PES0001'
                },
                loadChildren: () => import('./pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaModule)
            },{
                path: 'pessoa-juridica',
                data: {
                    title: 'Pessoa Jurídica',
                    titleTag: 'PES0002'
                },
                loadChildren: () => import('./pessoa-juridica/pessoa-juridica.module').then(m => m.PessoaJuridicaModule)
            }, {
                path: 'estado',
                data: {
                    title: 'Estado',
                    titleTag: 'PES0003'
                },
                loadChildren: () => import('./estado/estado.module').then(m => m.EstadoModule)
            }, {
                path: 'cidade',
                data: {
                    title: 'Cidade',
                    titleTag: 'PES0004'
                },
                loadChildren: () => import('./cidade/cidade.module').then(m => m.CidadeModule)
            }, {
                path: 'cep',
                data: {
                    title: 'Cep',
                    titleTag: 'PES0005'
                },
                loadChildren: () => import('./cep/cep.module').then(m => m.CepModule)
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
export class PessoaRoutingModule { }
