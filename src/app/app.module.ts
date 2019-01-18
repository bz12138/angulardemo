import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import {FormsModule} from '@angular/forms';

import { StorageService } from './services/storage.service';
import { HeaderComponent } from './components/header/header.component';
import { LifeComponent } from './components/life/life.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
