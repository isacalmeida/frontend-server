import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { CidadeComponent } from './cidade.component';
import { CidadeRoutingModule } from './cidade-routing.module';

const declarations = [
    CidadeComponent
];

const imports = [
    CommonModule,
    CoreModule,
    CidadeRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class CidadeModule { }
