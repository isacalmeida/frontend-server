import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { BoxModule, TabsModule, DropdownModule } from 'angular-admin-lte';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoreGenericModule } from './archicteture/core-generic.module';

const declarations = [
  HeaderComponent,
  SidebarComponent
];

const exports = [
  BoxModule,
  CoreGenericModule,
  HeaderComponent,
  TabsModule,
  SidebarComponent
];

const imports = [
  CommonModule,
  HttpClientModule,
  DropdownModule,
  TabsModule,
  BoxModule,
  ButtonModule,
  TableModule,
  PaginatorModule,
  CoreGenericModule
];

@NgModule({
  declarations: [ declarations ],
  exports: [ exports ],
  imports: [ imports ]
})
export class CoreModule { }
