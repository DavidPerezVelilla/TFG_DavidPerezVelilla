import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { StoreComponent } from './components/store/store.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RulesComponentComponent } from './components/rules-component/rules-component.component';


const redirectUnauthorizedToLogin = () =>redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  { path: 'add-team', component: AddTeamComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'edit-team', component: EditTeamComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'team-list', component: TeamListComponent},
  { path: 'team-list/:id', component: TeamDetailComponent},
  { path: 'rules', component: RulesComponentComponent},
  { path: 'store', component: StoreComponent},
  { path: 'dashboard', component: DashboardComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'login', component:LoginPageComponent, ...canActivate(redirectLoggedInToHome),},
  { path: 'register', component: RegisterPageComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
