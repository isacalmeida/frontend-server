import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { CepComponent } from './cep.component';
import { CepRoutingModule } from './cep-routing.module';

const declarations = [
    CepComponent
];

const imports = [
    CommonModule,
    CoreModule,
    CepRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class CepModule { }
