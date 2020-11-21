import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { AbstractInputComponent } from './generic/abstract/abstract-input.component';
import { AbstractModelComponent } from './generic/abstract/abstract-model.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ColumnComponent } from './generic/crud/column/column.component';
import { ContentComponent } from './content/content.component';
import { CrudComponent } from './generic/crud/crud.component';
import { DetailComponent } from './generic/crud/detail/detail.component';
import { FormComponent } from './generic/crud/form/form.component';
import { InputAutocompleteComponent } from './generic/components/autocomplete/input-autocomplete.component';
import { InputDateComponent } from './generic/components/input-date.component';
import { InputMaskComponent } from './generic/components/input-mask.component';
import { InputSwitchComponent } from './generic/components/input-switch.component';
import { InputTextComponent } from './generic/components/input-text.component';
import { MenuComponent } from './generic/menu/menu.component';
import { PagedListComponent } from './generic/crud/list/paged-list/paged-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaginationComponent } from './generic/crud/pagination/pagination.component';
import { SimpleListComponent } from './generic/crud/list/simple-list/simple-list.component';
import { SortingComponent } from './generic/crud/sorting/sorting.component';

const declarations = [
    AbstractInputComponent,
    AbstractModelComponent,
    BreadcrumbComponent,
    ColumnComponent,
    ContentComponent,
    CrudComponent,
    DetailComponent,
    FormComponent,
    InputAutocompleteComponent,
    InputDateComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    MenuComponent,
    PagedListComponent,
    PageNotFoundComponent,
    PaginationComponent,
    SimpleListComponent,
    SortingComponent
];

const exports = [
    declarations
];

const imports = [
    ButtonModule,
    CalendarModule,
    CardModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    MessagesModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    TabViewModule,
    ToastModule,
    ToolbarModule
];

@NgModule({
    declarations: [declarations],
    exports: [exports],
    imports: [imports]
})
export class CoreGenericModule { }
