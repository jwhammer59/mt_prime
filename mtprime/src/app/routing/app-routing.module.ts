import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { HomeComponent } from '../components/core/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('../components/dashboard-mod/dashboard-mod.module').then((m) => m.DashboardModModule),
  },
  {
    path: 'events',
    loadChildren: () => import('../components/event-mod/event-mod.module').then((m) => m.EventModModule),
  },
  {
    path: 'volunteers',
    loadChildren: () => import('../components/volunteer-mod/volunteer-mod.module').then((m) => m.VolunteerModModule)
  },
  {
    path: 'family-id',
    loadChildren: () => import('../components/family-id-mod/family-id-mod.module').then((m) => m.FamilyIdModModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
