import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PersonComponent } from './components/person/person.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetCreateComponent } from './components/planet-create/planet-create.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PersonComponent,
    MainComponent,
    HomeComponent,
    PlanetDetailsComponent,
    PlanetCreateComponent,
    PersonCreateComponent,
    PersonDetailsComponent,
    PersonListComponent,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
