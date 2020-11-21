import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { IndexComponent } from './index.component';

const declarations = [
  IndexComponent
];

const imports = [
  CardModule,
  CommonModule
];

@NgModule({
  declarations: [declarations],
  imports: [imports]
})
export class IndexModule { }
