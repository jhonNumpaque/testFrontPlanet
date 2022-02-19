import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-create',
  templateUrl: './planet-create.component.html',
  styleUrls: ['./planet-create.component.css'],
})
export class PlanetCreateComponent implements OnInit {
  form: FormGroup | any;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private planetService: PlanetService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      diameter: ['', Validators.required],
      ground: ['', Validators.required],
      name: ['', Validators.required],
      rotationPeriod: ['', [ Validators.required, Validators.minLength(6) ]],
      weather: ['', [ Validators.required, Validators.minLength(2) ]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.planetService.save(JSON.stringify(this.form.value, null, 2)).subscribe((data: {}) => {
      window.location.reload();
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
