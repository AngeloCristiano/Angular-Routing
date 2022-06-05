import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Ciao1Component } from './ciao1/ciao1.component';
import { Ciao2Component } from './ciao2/ciao2.component';
import { Ciao3Component } from './ciao3/ciao3.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    Ciao1Component,
    Ciao2Component,
    Ciao3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
