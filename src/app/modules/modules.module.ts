import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoModule } from './acesso/acesso.module';
import { CoreModule } from './core/core.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

import { IndexComponent } from './index/index.component';

export const modules = [
  AcessoModule,
  CommonModule,
  CoreModule,
  PessoaModule,
  ServicesModule,
  SharedModule
];

export const declarations = [
  IndexComponent
];

@NgModule({
  declarations: [ declarations ],
  exports: [ modules, declarations ],
  imports: [ modules ]
})
export class ModulesModule { }
