import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  teamRef: any;

  constructor(
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar ) {
      this.editForm = this.formBuilder.group({
        team_name: [''],
        description:[''],
        img: [''],
        icon:['']
      })
    }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.teamService.getTeam(id).subscribe(res=>{
      this.teamRef = res;
      this.editForm = this.formBuilder.group({
        team_name: [this.teamRef.team_name],
        description:[this.teamRef.description],
        img: [this.teamRef.img],
        icon:[this.teamRef.icon]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');

    this.teamService.updateTeam(id, this.editForm.value);
    this._snackBar.open("Equipo actualizado correctamente", "Aceptar")
    this.router.navigate(['']);
  }

}
