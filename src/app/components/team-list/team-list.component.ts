import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  Teams: Team[];
  teamsFiltered: Team[] = [];
  user:string;

  constructor(private teamService:TeamService) { }



  ngOnInit(): void {
    this.getTeams();
  }

  removeTeam = (team)=> this.teamService.deleteTeam(team)

  getTeams(){
    this.teamService.getTeamList().subscribe((res)=>{
      this.Teams = res.map((e)=>{
        return{
         id: e.payload.doc.id,...(e.payload.doc.data() as Team),

        }
      })
      this.getTeamsFiltred();
    })
  }
  getTeamsFiltred(){
    for (let i of this.Teams){
      if(i.user == ''){
          this.teamsFiltered.push(i);
      }
    }
  }

}
