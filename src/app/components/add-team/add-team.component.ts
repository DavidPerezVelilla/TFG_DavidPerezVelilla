import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  public teamForm: FormGroup;

  constructor(
    public teamService: TeamService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.teamForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.teamService.addTeam(this.teamForm.value);
    this.router.navigate(['list-users']);
   };
}
