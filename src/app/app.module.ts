import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamService } from './shared/team.service';
import { AuthService } from './shared/auth.service';

/* Firebase */

import { environment } from '../environments/environment';
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    EditTeamComponent,
    TeamListComponent,
    StoreComponent,
    DashboardComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterPageComponent,
    TeamDetailComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    provideAuth(() => getAuth())
  ],
  providers: [TeamService, AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
