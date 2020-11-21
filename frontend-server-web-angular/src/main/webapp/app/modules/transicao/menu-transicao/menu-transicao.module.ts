import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { MenuTransicaoComponent } from './menu-transicao.component';
import { MenuTransicaoRoutingModule } from './menu-transicao-routing.module';

const declarations = [
    MenuTransicaoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    MenuTransicaoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class MenuTransicaoModule { }
