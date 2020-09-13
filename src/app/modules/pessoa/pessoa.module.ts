import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MenuPessoaComponent } from './menu-pessoa/menu-pessoa.component';
import { PessoaFisicaComponent } from './pessoas/pessoa-fisica/pessoa-fisica.component';

@NgModule({
  declarations: [MenuPessoaComponent, PessoaFisicaComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PessoaModule { }
