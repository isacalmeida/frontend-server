import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransicaoRoutingModule } from './transicao-routing.module';
import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { TransicaoComponent } from './transicao.component';

const declarations = [
    TransicaoComponent
];

const imports = [
    TransicaoRoutingModule,
    CommonModule,
    CoreModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class TransicaoModule { }
