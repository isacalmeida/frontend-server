import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BoxModule, BoxSmallModule } from 'angular-admin-lte';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { AbstractInputComponent } from './generic/abstract/abstract-input.component';
import { AbstractModelComponent } from './generic/abstract/abstract-model.component';
import { ColumnComponent } from './generic/crud/column/column.component';
import { CrudComponent } from './generic/crud/crud.component';
import { FormComponent } from './generic/crud/form/form.component';
import { InputTextComponent } from './generic/abstract/input-text.component';
import { InputTextLabelComponent } from './generic/abstract/input-text-label.component';
import { ListComponent } from './generic/crud/list/list.component';
import { MenuComponent } from './generic/menu/menu.component';
import { PaginationComponent } from './generic/crud/pagination/pagination.component';
import { SortingComponent } from './generic/crud/sorting/sorting.component';

const declarations = [
  AbstractInputComponent,
  AbstractModelComponent,
  ColumnComponent,
  CrudComponent,
  FormComponent,
  InputTextComponent,
  InputTextLabelComponent,
  ListComponent,
  MenuComponent,
  PaginationComponent,
  SortingComponent
];

const exports = [
  declarations
];

const imports = [
  BoxModule,
  BoxSmallModule,
  ButtonModule,
  CardModule,
  CommonModule,
  ConfirmDialogModule,
  FormsModule,
  InputTextModule,
  MessagesModule,
  RouterModule,
  TableModule,
  ToastModule,
  ToolbarModule
];

@NgModule({
  declarations: [ declarations ],
  exports: [ exports ],
  imports: [ imports ]
})
export class CoreGenericModule { }
