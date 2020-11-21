import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { MudancaComponent } from './mudanca.component';
import { MudancaRoutingModule } from './mudanca-routing.module';

const declarations = [
    MudancaComponent
];

const imports = [
    CommonModule,
    CoreModule,
    MudancaRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class MudancaModule { }
