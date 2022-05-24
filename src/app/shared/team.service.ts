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
      this.db.collection('team')
      .add(team).then(
        (response)=>{
          console.log(response)
        },
        (error)=> reject(error)
      );
    });
  }

  getTeam(id:string){
    return this.db.collection('team')
    .doc(id)
    .valueChanges();
  }

  getTeamList(){
   return this.db
   .collection('team')
   .snapshotChanges()
  }

  getPlayers(){
    return this.db.collection('player')
    .snapshotChanges()
  }

  getSubRaceList(){
    return this.db.collection('sub_race')
    .snapshotChanges()
  }

  updateTeam(id, team:Team){
    return this.db.collection('team').doc(id)
    .update({
      team_name: team.team_name,
      description: team.description,
      img: team.img,
      icon: team.icon,
      race: team.race,

    })

  }

  deleteTeam(team){
    return this.db.collection('team')
    .doc(team.id)
    .delete
  }

}
