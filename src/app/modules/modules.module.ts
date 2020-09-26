import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoModule } from './acesso/acesso.module';
import { CoreModule } from './core/core.module';
import { IndexModule } from './index/index.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

const modules = [
  AcessoModule,
  CommonModule,
  CoreModule,
  IndexModule,
  PessoaModule,
  ServicesModule,
  SharedModule
];

const declarations = [
];

@NgModule({
  declarations: [declarations],
  exports: [modules, declarations],
  imports: [modules]
})
export class ModulesModule { }
