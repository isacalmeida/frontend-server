import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoModule } from './acesso/acesso.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';
import { CoreModule } from './core/core.module';
import { IndexModule } from './index/index.module';
import { OperacaoModule } from './operacao/operacao.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { TransicaoModule } from './transicao/transicao.module';

const modules = [
    AcessoModule,
    CommonModule,
    ConfiguracaoModule,
    CoreModule,
    IndexModule,
    OperacaoModule,
    PessoaModule,
    ServicesModule,
    SharedModule,
    TransicaoModule
];

const declarations = [
];

@NgModule({
    declarations: [declarations],
    exports: [modules, declarations],
    imports: [modules]
})
export class ModulesModule { }
