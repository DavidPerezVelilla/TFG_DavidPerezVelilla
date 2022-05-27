import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/shared/player.model';
import { Team } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  teams: Team = new Team;
  players: Player[];
  playersFiltered: Player[] = [];
  errorMessage = '';
  id =''

  constructor(private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.getTeam(id);
      this.id = id

    }

    this.teamService.getPlayers().subscribe((res)=>{
      this.players = res.map((e)=>{
        return{
          id: e.payload.doc.id,...(e.payload.doc.data() as Player),
        }
      })
      this.filterPlayers();
    })
  }

  filterPlayers() {
    for (let i of this.players){
      if (i.team == this.id){
        this.playersFiltered.push(i)
      }
    }
  }

  private getTeam(id:string){
    this.teamService.getTeam(id).subscribe({
      next:team => this.teams =  <Team>team,
      error: err => this.errorMessage = err
    });
  }

}
