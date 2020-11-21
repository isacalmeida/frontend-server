import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { EstadoComponent } from './estado.component';
import { EstadoRoutingModule } from './estado-routing.module';

const declarations = [
    EstadoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    EstadoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class EstadoModule { }
