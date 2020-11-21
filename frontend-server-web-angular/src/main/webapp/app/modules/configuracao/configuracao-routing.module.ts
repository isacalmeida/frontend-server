import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/archicteture/pages/page-not-found/page-not-found.component';

import { ConfiguracaoComponent } from './configuracao.component';

const routes: Routes = [
    {
        path: '',
        component: ConfiguracaoComponent,
        children: [
            {
                path: '',
                data: {
                    title: 'Configuracao'
                },
                loadChildren: () => import('./menu-configuracao/menu-configuracao.module').then(m => m.MenuConfiguracaoModule)
            }, {
                path: 'executar-migration',
                data: {
                    title: 'Executar Migration'
                },
                loadChildren: () => import('./executar-migration/executar-migration.module').then(m => m.ExecutarMigrationModule)
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
export class ConfiguracaoRoutingModule { }
