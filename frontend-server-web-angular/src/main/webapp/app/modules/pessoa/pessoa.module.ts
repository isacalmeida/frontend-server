import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';

const declarations = [
  PessoaComponent
];

const imports = [
  CommonModule,
  CoreModule,
  PessoaRoutingModule
];

@NgModule({
  declarations: [ declarations ],
  imports: [ imports ]
})
export class PessoaModule { }
