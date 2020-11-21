import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { CoreGenericModule } from './archicteture/core-generic.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

const declarations = [
    HeaderComponent,
    LoginComponent,
    SidebarComponent
];

const exports = [
    CoreGenericModule,
    HeaderComponent,
    SidebarComponent
];

const imports = [
    AutoCompleteModule,
    ButtonModule,
    CommonModule,
    CoreGenericModule,
    FormsModule,
    HttpClientModule,
    PaginatorModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule
];

@NgModule({
    declarations: [declarations],
    exports: [exports],
    imports: [imports]
})
export class CoreModule { }
