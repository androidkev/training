import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HotcoldrxjsComponent } from './hotcoldrxjs/hotcoldrxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { OperatorsComponent } from './operators/operators.component';
import { BackpressureComponent } from './backpressure/backpressure.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { CombineComponent } from './combine/combine.component';
import { CatchComponent } from './catch/catch.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    HotcoldrxjsComponent,
    SubjectsComponent,
    OperatorsComponent,
    BackpressureComponent,
    SwitchmapComponent,
    CombineComponent,
    CatchComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
