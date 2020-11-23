import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { IncidenteComponent } from './incidente.component';
import { IncidenteRoutingModule } from './incidente-routing.module';

const declarations = [
    IncidenteComponent
];

const imports = [
    CommonModule,
    CoreModule,
    IncidenteRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class IncidenteModule { }
