import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  public id: number = 0;
  public person: any;

  constructor(
    public route: ActivatedRoute,
    public personService: PersonService,
    public router: Router
    ) {
      this.id = parseInt(route.snapshot.params['id']);
    }

  ngOnInit(): void {
    this.updateViews();
  }

  viewListPersons() {
    this.router.navigate(["persons"]);
  }

  updateViews() {
    this.personService.update(this.id).subscribe((data: any) => {
      if (data) {
        this.person = data;
      }
    });
  }
}
