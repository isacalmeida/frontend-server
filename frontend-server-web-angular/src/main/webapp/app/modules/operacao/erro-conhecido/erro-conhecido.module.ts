import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { ErroConhecidoComponent } from './erro-conhecido.component';
import { ErroConhecidoRoutingModule } from './erro-conhecido-routing.module';

const declarations = [
    ErroConhecidoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    ErroConhecidoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class ErroConhecidoModule { }
