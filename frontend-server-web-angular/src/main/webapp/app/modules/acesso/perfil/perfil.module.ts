import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/main/webapp/app/modules/core/core.module';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';

const declarations = [
  PerfilComponent
];

const imports = [
  CommonModule,
  CoreModule,
  PerfilRoutingModule
];

@NgModule({
  declarations: [ declarations ],
  imports: [ imports ]
})
export class PerfilModule { }
