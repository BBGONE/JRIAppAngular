import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindDirective } from 'projects/client-app/src/directives/bind.directive';
import { DataSourceDirective } from '../directives/datasource.directive';

@NgModule({
  declarations: [
    AppComponent,
    BindDirective,
    DataSourceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
