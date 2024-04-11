import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
