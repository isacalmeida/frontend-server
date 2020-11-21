import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

const declarations = [
    UsuarioComponent
];

const imports = [
    CommonModule,
    CoreModule,
    UsuarioRoutingModule
];

@NgModule({
    declarations: [declarations],
    imports: [imports]
})
export class UsuarioModule { }
