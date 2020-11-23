import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { ProblemaComponent } from './problema.component';
import { ProblemaRoutingModule } from './problema-routing.module';

const declarations = [
    ProblemaComponent
];

const imports = [
    CommonModule,
    CoreModule,
    ProblemaRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class ProblemaModule { }
