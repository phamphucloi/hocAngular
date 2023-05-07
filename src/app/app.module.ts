//thư viện của Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSwitchCase } from '@angular/common';
import { Routes } from '@angular/router';

//Học thầy Trí.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1.component';
import { Demo2Component } from './demo2.component';
import { Demo3Component } from './demo3.component';
import { TestComponent } from './test/test.component';
import { Demo4Component } from './demo4.component';
import { Demo5Component } from './demo5.component';
import { EventComponent } from './event.component';

//Học trên ytb.
import { LearingModuleComponent } from './learing-module/learing-module.component';
import { TestPipe } from './test.pipe';
import { BoldDirective } from './Directives/bold.directive';
import { ComboboxComponent } from './combobox/combobox.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'first-component', component: LearingModuleComponent },
  { path: 'second-component', component: ComboboxComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


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
    Demo5Component,
    EventComponent,
    BoldDirective,
    ComboboxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSwitchCase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
