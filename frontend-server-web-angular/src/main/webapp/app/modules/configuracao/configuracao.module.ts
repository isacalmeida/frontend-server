import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { ConfiguracaoComponent } from './configuracao.component';
import { ConfiguracaoRoutingModule } from './configuracao-routing.module';

const declarations = [
    ConfiguracaoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    ConfiguracaoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class ConfiguracaoModule { }
