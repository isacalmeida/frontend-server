import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { EventoComponent } from './evento.component';
import { EventoRoutingModule } from './evento-routing.module';

const declarations = [
    EventoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    EventoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class EventoModule { }
