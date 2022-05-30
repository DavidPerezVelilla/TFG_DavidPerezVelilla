import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Race } from 'src/app/shared/race.model';
import { TeamService } from 'src/app/shared/team.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;

  Races: Race[];

  constructor(
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.teamForm = this.formBuilder.group({
      team_name: [''],
      description: [''],
      icon: [''],
      img: [''],
      race:[''],
      user: [teamService.getUser()]
    })
  }

  ngOnInit(): void {
    this.teamService.getRaceList().subscribe((res)=>{
      this.Races = res.map((e)=>{
        return{
          id: e.payload.doc.id,...(e.payload.doc.data() as Race),
        }
      })
    })
  }

  onSubmit() {
    this.teamService.addTeam(this.teamForm.value);
    this._snackBar.open("Equipo creado con exito!!", "Aceptar");
   };
}
