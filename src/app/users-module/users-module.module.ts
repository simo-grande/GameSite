import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { MaterialModule } from './../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InvitesComponent } from '../invites/invites.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  declarations: [
    HomeComponentComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InvitesComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponentComponent }, // here
      { path: 'sign-up', component: SignupComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModuleModule {}
