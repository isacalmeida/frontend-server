import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';

import { ExecutarMigrationComponent } from './executar-migration.component';
import { ExecutarMigrationRoutingModule } from './executar-migration-routing.module';

const declarations = [
    ExecutarMigrationComponent
];

const imports = [
    ButtonModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ExecutarMigrationRoutingModule,
    MessagesModule
];

@NgModule({
    declarations: [ declarations ],
    imports: [ imports ]
})
export class ExecutarMigrationModule { }
