import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRaceComponent } from './components/add-race/add-race.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { StoreComponent } from './components/store/store.component';
import { TeamListComponent } from './components/team-list/team-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'team-list' },
  { path: 'add-team', component: AddTeamComponent },
  { path: 'add-race', component: AddRaceComponent },
  { path: 'edit-team/:id', component: EditTeamComponent },
  { path: 'team-list', component: TeamListComponent},
  { path: 'store', component: StoreComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
