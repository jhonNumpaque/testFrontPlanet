import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PersonService } from 'src/app/services/person.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  public id: number = 0;
  public planet: Planet | any;
  public info: any;
  public persons: any = [];
  public countPersons = 0;
  page = 1;
  count = 0;
  currentIndex = -1;
  tableSize = 5;
  tableSizes = [1, 3, 5, 10, 20, 30, 40];

  constructor(
    public route: ActivatedRoute,
    public planetService: PlanetService,
    public personService: PersonService,
    public router: Router
  ) {
    this.id = parseInt(route.snapshot.params['id']);
  }


  ngOnInit(): void {
    this.updateViews();
    this.gettingAdicionalInfo();
  }

  viewListPlanets() {
    this.router.navigate(["planets"]);
  }

  updateViews() {
    this.planetService.update(this.id).subscribe((data: Planet) => {
      if (data) {
        this.planet = data;
      }
    });
  }

  gettingAdicionalInfo() {
    this.personService.getPersonsByPlanet(this.id).subscribe((data: any) => {
      if (data) {
        this.persons = data.list;
        this.countPersons = data.count;
      }
    });
  }

  onTableDataChange(event: any){
    this.page = event;
    this.gettingAdicionalInfo();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.gettingAdicionalInfo();
  }
}
