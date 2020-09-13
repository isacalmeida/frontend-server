import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAcessoComponent } from './menu-acesso/menu-acesso.component';

export const modules = [
  CommonModule
];

export const declarations = [
  MenuAcessoComponent
];

@NgModule({
  declarations: [ declarations ],
  imports: [ modules ]
})
export class AcessoModule { }
