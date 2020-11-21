import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { PessoaFisicaComponent } from './pessoa-fisica.component';
import { PessoaFisicaRoutingModule } from './pessoa-fisica-routing.module';

const declarations = [
    PessoaFisicaComponent
];

const imports = [
    CommonModule,
    CoreModule,
    PessoaFisicaRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class PessoaFisicaModule { }
