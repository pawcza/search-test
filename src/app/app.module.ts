import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { ServicesModule } from './services/services.module';
import { DataModule } from '@search-app/data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SearchModule,
    ServicesModule.forRoot(),
    DataModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
