import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { ItemConfiguracaoComponent } from './item-configuracao.component';
import { ItemConfiguracaoRoutingModule } from './item-configuracao-routing.module';

const declarations = [
    ItemConfiguracaoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    ItemConfiguracaoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class ItemConfiguracaoModule { }
