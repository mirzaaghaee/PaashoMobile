import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' , canActivate: [AuthGuardService]},
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' , canActivate: [AuthGuardService]},
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' , canActivate: [AuthGuardService]},
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule', canActivate: [AuthGuardService] },
  { path: 'eventdetail', loadChildren: './pages/modal/eventdetail/eventdetail.module#EventdetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
