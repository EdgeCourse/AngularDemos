import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WithoutDIComponent } from './without-di/without-di.component';
import { WithDIComponent } from './with-di/with-di.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutDIComponent,
    WithDIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
