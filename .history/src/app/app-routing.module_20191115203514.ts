import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'  },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule', canActivate: [AuthGuardService]  },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' , canActivate: [AuthGuardService]},
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' , canActivate: [AuthGuardService]},
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' , canActivate: [AuthGuardService]},
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule', canActivate: [AuthGuardService] },
  { path: 'eventdetail', loadChildren: './pages/modal/eventdetail/eventdetail.module#EventdetailPageModule',
  canActivate: [AuthGuardService]  },
  { path: 'maphome', loadChildren: './pages/maphome/maphome.module#MaphomePageModule', canActivate: [AuthGuardService]  },
  { path: 'myevents', loadChildren: './pages/myevents/myevents.module#MyeventsPageModule', canActivate: [AuthGuardService] },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule', canActivate: [AuthGuardService]  },
  { path: 'gift', loadChildren: './pages/gift/gift.module#GiftPageModule', canActivate: [AuthGuardService]  },
  { path: 'invitefriends', loadChildren: './pages/invitefriends/invitefriends.module#InvitefriendsPageModule' ,
  canActivate: [AuthGuardService] },
  { path: 'adnewevent', loadChildren: './pages/addnewevent/addnewevent.module#AddneweventPageModule', canActivate: [AuthGuardService]  },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
