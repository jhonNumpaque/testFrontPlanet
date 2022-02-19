import { Component, OnInit, DoCheck } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, DoCheck {
  Planets: any = [];
  PlanetCount: number = 0;
  PlanetsWithMoreViews: any = [];

  constructor(public planetService: PlanetService) {}

  ngOnInit(): void {
    this.loadPlanets();
  }

  ngDoCheck(): void {
    this.PlanetsWithMoreViews = this.getTopNPlanet(3);
  }

  loadPlanets() {
    return this.planetService.getPlanets().subscribe((data: any) => {
      if (data) {
        this.Planets = data;
        this.PlanetCount = data.length;
      }
    });
  }

  getTopNPlanet(n: number) {
    if (n > this.Planets.length) return false;
    return this.Planets.slice()
      .sort((a: Planet, b: Planet) => {
        return b.views - a.views;
      })
      .slice(0, n);
  }
}
