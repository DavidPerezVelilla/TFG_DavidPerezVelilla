import { Injectable } from '@angular/core';
import { Team } from './team';

import{
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database'


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamsRef: AngularFireList<any>
  teamRef: AngularFireObject<any>

  constructor(private db:AngularFireDatabase) { }

  addTeam(team:Team){
    this.teamsRef.push({
      team_name: team.team_name,
      description: team.description,
      img: team.img,
      icon: team.icon,
      race: team.race,
      players: team.players
    })
    .catch((error)=>{
      this.errorMgmt(error);
    });
  }

  getTeam(id:string){
    this.teamRef = this.db.object('team-list/'+id);
    return this.teamRef;
  }

  getTeamList(){
    this.teamsRef = this.db.list('team-list');
    return this.teamsRef
  }

  updateTeam(id, team:Team){
    this.teamRef.update({
      team_name: team.team_name,
      description: team.description,
      img: team.img,
      icon: team.icon,
      race: team.race,
      players: team.players
    })
    .catch((error) => {
      this.errorMgmt(error);
    });
  }

  deleteTeam(id:string){
    this.teamRef = this.db.object('team-list/'+id);
    this.teamRef.remove().catch((error)=>{
      this.errorMgmt(error);
    });
  }
  private errorMgmt(error){
    console.log(error);
  }

}
