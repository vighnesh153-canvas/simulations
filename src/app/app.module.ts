import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ThanosSnapComponent } from './simulations-components/thanos-snap/thanos-snap.component';
import { TemplateComponent } from './simulations-components/template/template.component';
import {
  ElasticCollisionToFindPIComponent
} from './simulations-components/elastic-collision-to-find-pi/elastic-collision-to-find-pi.component';
import { IntegerInputComponent } from './shared/integer-input/integer-input.component';
import { DataComponent } from './shared/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ThanosSnapComponent,
    TemplateComponent,
    ElasticCollisionToFindPIComponent,
    IntegerInputComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
