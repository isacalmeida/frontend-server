import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { MenuAcessoComponent } from './menu-acesso.component';
import { MenuAcessoRoutingModule } from './menu-acesso-routing.module';

const declarations = [
    MenuAcessoComponent
];

const imports = [
    CommonModule,
    CoreModule,
    MenuAcessoRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class MenuAcessoModule { }
