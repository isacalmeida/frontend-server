import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacaoRoutingModule } from './operacao-routing.module';
import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { OperacaoComponent } from './operacao.component';

const declarations = [
    OperacaoComponent
];

const imports = [
    OperacaoRoutingModule,
    CommonModule,
    CoreModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class OperacaoModule { }
