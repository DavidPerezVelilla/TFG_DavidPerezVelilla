import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RaceService } from 'src/app/shared/race.service';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.scss']
})
export class AddRaceComponent implements OnInit {

  public raceForm: FormGroup;

  constructor(
    public raceService: RaceService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.raceForm = this.formBuilder.group({
      race_name: [''],
      subRace: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.raceService.addRace(this.raceForm.value);
    this.router.navigate(['team-list']);
   };
}
