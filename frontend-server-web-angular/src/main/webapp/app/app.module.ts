import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModulesModule } from './modules/modules.module';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

const declarations = [
  AppComponent
];

const imports = [
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
  HttpClientModule,
  ModulesModule
];

const providers = [
  ConfirmationService,
  MessageService
];

@NgModule({
  declarations: [declarations],
  imports: [imports],
  providers: [providers],
  bootstrap: [declarations]
})
export class AppModule { }
