import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Race } from 'src/app/shared/race.model';
import { TeamService } from 'src/app/shared/team.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  public teamForm: FormGroup;

  Races: Race[];

  constructor(
    public teamService: TeamService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.teamForm = this.formBuilder.group({
      team_name: [''],
      description: [''],
      icon: [''],
      img: [''],
      race:['']
    })
  }

  ngOnInit(): void {
    this.teamService.getTeamList().subscribe((res)=>{
      this.Races = res.map((e)=>{
        return{
          id: e.payload.doc.id,...(e.payload.doc.data() as Race),
        }
      })
    })
  }

  onSubmit() {
    this.teamService.addTeam(this.teamForm.value);
    this.router.navigate(['team-list']);
   };
}
