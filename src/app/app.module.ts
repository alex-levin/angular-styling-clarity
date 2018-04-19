import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from '@clr/angular';

import { UiModule } from './ui/ui.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    UiModule,
    AppRoutingModule,
    PagesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
