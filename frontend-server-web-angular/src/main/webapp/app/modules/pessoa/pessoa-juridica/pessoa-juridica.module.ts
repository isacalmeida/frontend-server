import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { PessoaJuridicaComponent } from './pessoa-juridica.component';
import { PessoaJuridicaRoutingModule } from './pessoa-juridica-routing.module';

const declarations = [
    PessoaJuridicaComponent
];

const imports = [
    CommonModule,
    CoreModule,
    PessoaJuridicaRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class PessoaJuridicaModule { }
