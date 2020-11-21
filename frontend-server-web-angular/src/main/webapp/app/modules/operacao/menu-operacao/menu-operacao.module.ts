import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { MenuOperacaoComponent } from './menu-operacao.component';
import { MenuOperacaoRoutingModule } from './menu-operacao-routing.module';

const declarations = [
    MenuOperacaoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    MenuOperacaoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class MenuOperacaoModule { }
