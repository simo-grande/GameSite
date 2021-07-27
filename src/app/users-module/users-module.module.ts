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
import { QuoteformComponent } from '../quoteform/quoteform.component';
import { EditPasswordComponent } from '../edit-password/edit-password.component';
import { YourQuotesComponent } from '../your-quotes/your-quotes.component';
import { AccessGuard } from './../access.guard';

@NgModule({
  declarations: [
    HomeComponentComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InvitesComponent,
    ProfileComponent,
    QuoteformComponent,
    EditPasswordComponent,
    YourQuotesComponent,
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
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AccessGuard],
      },
      {
        path: 'quoteForm',
        component: QuoteformComponent,
        canActivate: [AccessGuard],
      },
      {
        path: 'edit_profile',
        component: EditPasswordComponent,
        canActivate: [AccessGuard],
      },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModuleModule {}
