import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSwitchCase } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1.component';
import { Demo2Component } from './demo2.component';
import { Demo3Component } from './demo3.component';
import { TestComponent } from './test/test.component';
import { Demo4Component } from './demo4.component';
import { Demo5Component } from './demo5.component';

import { LearingModuleComponent } from './learing-module/learing-module.component';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    TestComponent,
    LearingModuleComponent,
    TestPipe,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSwitchCase
  ],
  providers: [],
  bootstrap: [Demo5Component]
})
export class AppModule { }
