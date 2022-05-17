import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Race } from './race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private db:AngularFirestore) { }

  addRace(race:Race){
    return new Promise<any>((resolve,reject)=>{
      this.db.collection('race-collection')
      .add(race).then(
        (response)=>{
          console.log(response)
        },
        (error)=> reject(error)
      );
    });
  }

  getRace(id:string){
    return this.db.collection('race-collection')
    .doc(id)
    .valueChanges();
  }

  getRaceList(){
    return this.db.collection('race-collection')
    .snapshotChanges()
  }

  deleteRace(race){
    return this.db.collection('race-collection')
    .doc(race.id)
    .delete
  }

}
