import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoRoutingModule } from './acesso-routing.module';
import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { AcessoComponent } from './acesso.component';

const declarations = [
    AcessoComponent
];

const imports = [
    AcessoRoutingModule,
    CommonModule,
    CoreModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class AcessoModule { }
