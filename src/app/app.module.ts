import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module'; //  Importa el módulo core

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule], //  Agrega `CoreModule`
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
