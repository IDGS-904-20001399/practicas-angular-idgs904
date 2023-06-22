import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Distancia2puntosModule } from './distancia2puntos/distancia2puntos/distancia2puntos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Distancia2puntosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
