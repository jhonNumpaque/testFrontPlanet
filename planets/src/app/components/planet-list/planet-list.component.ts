import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  Planets: any = [];
  page = 1;
  count = 0;
  currentIndex = -1;
  tableSize = 5;
  tableSizes = [1, 3, 5, 10, 20, 30, 40];

  constructor(public planetService: PlanetService) {}

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets() {
    return this.planetService.getPlanets().subscribe((data: any) => {
      if (data) this.Planets = data;
    });
  }

  onTableDataChange(event: any){
    this.page = event;
    this.loadPlanets();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.loadPlanets();
  }
}
