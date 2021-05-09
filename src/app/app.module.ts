import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { GetterComponent } from './getter/getter.component';
import { SetterComponent } from './setter/setter.component';

@NgModule({
  declarations: [
    AppComponent,
    GetterComponent,
    SetterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
