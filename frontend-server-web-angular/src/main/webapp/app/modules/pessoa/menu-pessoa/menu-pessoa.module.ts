import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { MenuPessoaComponent } from './menu-pessoa.component';
import { MenuPessoaRoutingModule } from './menu-pessoa-routing.module';

const declarations = [
    MenuPessoaComponent
];

const imports = [
    CommonModule,
    CoreModule,
    MenuPessoaRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class MenuPessoaModule { }
