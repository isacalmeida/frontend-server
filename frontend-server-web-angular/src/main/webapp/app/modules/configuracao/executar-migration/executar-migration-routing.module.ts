import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'src/main/webapp/app/modules/core/archicteture/pages/page-not-found/page-not-found.component';
import { ExecutarMigrationComponent } from './executar-migration.component';

const routes: Routes = [
    {
        path: '',
        component: ExecutarMigrationComponent,
        data: {
            title: 'Executar Migration'
        },
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExecutarMigrationRoutingModule { }
