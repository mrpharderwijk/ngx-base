import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RsComponentsModule } from '@rocketsciencebv/rs-components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    RsComponentsModule,
  ],
  declarations: [AppComponent, MainComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
