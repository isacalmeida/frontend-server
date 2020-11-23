import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { RequisicaoComponent } from './requisicao.component';
import { RequisicaoRoutingModule } from './requisicao-routing.module';

const declarations = [
    RequisicaoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    RequisicaoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class RequisicaoModule { }
