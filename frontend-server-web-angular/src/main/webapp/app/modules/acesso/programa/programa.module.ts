import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { ProgramaComponent } from './programa.component';
import { ProgramaRoutingModule } from './programa-routing.module';

const declarations = [
    ProgramaComponent
];

const imports = [
    CommonModule,
    CoreModule,
    ProgramaRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class ProgramaModule { }
