import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonComponent } from './components/person/person.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetComponent } from './components/planet/planet.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent },
  { path: "planets", component: PlanetComponent },
  { path: "persons", component: PersonComponent },
  { path: "planets/:id", component: PlanetDetailsComponent },
  { path: "persons/:id", component: PersonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
