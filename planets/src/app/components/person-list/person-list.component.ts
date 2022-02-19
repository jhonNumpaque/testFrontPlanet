import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PersonService } from 'src/app/services/person.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  Persons: any = [];
  Planet: Planet | any;
  page = 1;
  count = 0;
  currentIndex = -1;
  tableSize = 5;
  tableSizes = [1, 3, 5, 10, 20, 30, 40];

  constructor(
    public personService: PersonService,
    public planetService: PlanetService
  ) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(){
    return this.personService.getPersons().subscribe((data: any) => {
      if (data) this.Persons = data;
    });
  }

  onTableDataChange(event: any){
    this.page = event;
    this.loadPersons();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.loadPersons();
  }
}
