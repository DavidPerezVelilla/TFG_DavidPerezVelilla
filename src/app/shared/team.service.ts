import { Injectable } from '@angular/core';
import { Team } from './team.model';
import{ AngularFirestore } from '@angular/fire/compat/firestore'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  constructor(private db:AngularFirestore, private authService: AuthService) { }

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

  getRaceList(){
    return this.db.collection('race')
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

  addPlayer(player:Player){
    return new Promise<any>((resolve,reject)=>{
      this.db.collection('player')
      .add(player).then(
        (response)=>{
          console.log(response)
        },
        (error)=> reject(error)
      );
    });
  }

  getPlayerById(id:string){
    return this.db.collection('player')
    .doc(id)
    .valueChanges();
  }

  getUser(): string {
    return this.authService.getAuth().currentUser.uid;
  }
}
