import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  Teams: Team[];
  teamsByUser: Team[] = []
  user:string;
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.user=this.teamService.getUser();
    this.teamService.getTeamList().subscribe((res)=>{
      this.Teams = res.map((e)=>{
        return{
          id: e.payload.doc.id,...(e.payload.doc.data() as Team),
        }
      })
      this.filterUser();
    })

  }

  filterUser(){
    for(let i of this.Teams){
      if(i.user == this.user){
        this.teamsByUser.push(i);
      }
    }
  }
  removeTeam(team){
    this.teamService.deleteTeam(team)
  }


}
