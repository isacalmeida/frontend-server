import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { MenuConfiguracaoComponent } from './menu-configuracao.component';
import { MenuConfiguracaoRoutingModule } from './menu-configuracao-routing.module';

const declarations = [
    MenuConfiguracaoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    MenuConfiguracaoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class MenuConfiguracaoModule { }
