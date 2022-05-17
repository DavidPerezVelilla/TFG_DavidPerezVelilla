import { Injectable } from '@angular/core';
import { Team } from './team.model';
import{ AngularFirestore } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class TeamService {


  constructor(private db:AngularFirestore) { }

  addTeam(team:Team){
    return new Promise<any>((resolve,reject)=>{
      this.db.collection('team-collection')
      .add(team).then(
        (response)=>{
          console.log(response)
        },
        (error)=> reject(error)
      );
    });
  }

  getTeam(id:string){
    return this.db.collection('team-collection')
    .doc(id)
    .valueChanges();
  }

  getTeamList(){
   return this.db
   .collection('team-collection')
   .snapshotChanges()
  }

  updateTeam(id, team:Team){
    return this.db.collection('team-collection').doc(id)
    .update({
      team_name: team.team_name,
      description: team.description,
      img: team.img,
      icon: team.icon,
      race: team.race,
      players: team.players
    })

  }

  deleteTeam(team){
    return this.db.collection('team-collection')
    .doc(team.id)
    .delete
  }

}
