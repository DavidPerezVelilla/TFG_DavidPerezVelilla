import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared/player.model';
import { Team } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnInit {

  teams: Team = new Team;
  players: Player[];
  playersFiltered: Player[] = [];
  team_race: string = '';
  errorMessage = '';
  playersByRace:Player[] = [];
  id =''
  playerId = '';
  playerForm: FormGroup;
  player: Player = new Player;
  newPlayer: Player = new Player;

  constructor(private teamService: TeamService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) {

      this.playerForm = this.formBuilder.group({

        player_name:[''],
        str: [''],


      })

    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.getTeam(id);
      this.id = id;

    }

    this.teamService.getPlayers().subscribe((res)=>{
      this.players = res.map((e)=>{
        return{
          id: e.payload.doc.id,...(e.payload.doc.data() as Player),
        }
      })
      this.filterPlayers();
      this.team_race = this.teams.race;
      this.racePlayers();
    })
  }

  filterPlayers() {
    for (let i of this.players){
      if (i.team == this.id){
        this.playersFiltered.push(i)
      }
    }
  }

  racePlayers(){
    for (let i of this.players){
      if(i.race == this.team_race){
        this.playersByRace.push(i);
      }
    }
  }

  private getTeam(id:string){
    this.teamService.getTeam(id).subscribe({
      next:team => this.teams =  <Team>team,
      error: err => this.errorMessage = err
    });
  }

  onSubmit() {

    this.teamService.addPlayer(this.playerForm.value);
    this._snackBar.open("Jugador añadido correctamente", "Aceptar");
   };

}
