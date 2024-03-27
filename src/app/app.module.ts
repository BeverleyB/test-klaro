import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { SecondaryCardComponent } from './components/secondary-card/secondary-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryCardComponent,
    SecondaryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
