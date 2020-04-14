import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoModule } from './acesso/acesso.module';
import { CoreModule } from './core/core.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent, AcessoModule, CoreModule, PessoaModule, ServicesModule, SharedModule],
  imports: [
    CommonModule, CoreModule, AcessoModule, PessoaModule, ServicesModule, SharedModule
  ]
})
export class ModulesModule { }
