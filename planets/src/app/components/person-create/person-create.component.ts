import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
})
export class PersonCreateComponent implements OnInit {
  form: FormGroup | any;
  submitted = false;

  Planets: any = [];
  Genders: any = [ 'Masculino', 'Femenino' ];
  constructor(
    private formBuilder: FormBuilder,
    public planetService: PlanetService,
    public personService: PersonService
  ) {}

  ngOnInit(): void {
    this.loadPlanets();
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      document: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      gender: ['', [Validators.required]],
      age: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      weight: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      height: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      birthdate: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      planet: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.personService
      .save(JSON.stringify(this.form.value, null, 2))
      .subscribe((data: {}) => {
        console.log(data);
        window.location.reload();
      });
  }

  loadPlanets() {
    return this.planetService.getPlanets().subscribe((data: any) => {
      if (data) this.Planets = data;
    });
  }

  changeGender(e: any) {
    this.form.get('gender').setValue(e.target.value, {
      onlySelf: true
    })
  }

  changePlanet(e: any) {
    this.form.get('planetId').setValue(e.target.value, {
      onlySelf: true
    })
  }
}
