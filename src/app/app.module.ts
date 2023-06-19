import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyPipe } from '@angular/common';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { MillionaireNextDoorComponent } from './calculators/millionaire-next-door/millionaire-next-door.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    OnlyNumberDirective,
    MillionaireNextDoorComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
