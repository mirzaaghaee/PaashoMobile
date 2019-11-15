import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/Authentication.service';

import { Pages } from './interfaces/pages';
import {Profile} from './models/Profile';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;
  userProfile: any = [];

  constructor(
    private apiservice: ApiService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.appPages = [
      {
        title: 'صفحه اصلی',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'رویدادهای من',
        url: '/myevents',
        direct: 'forward',
        icon: 'contacts'
      },
      {
        title: 'پیامهای من',
        url: '/notification',
        direct: 'forward',
        icon: 'notifications'
      },
      {
        title: 'رویداد جدید',
        url: '/adnewevent',
        direct: 'forward',
        icon: 'add-circle'
      },
      {
        title: 'گفتگوها',
        url: '/chat',
        direct: 'forward',
        icon: 'chatboxes'
      },
      {
        title: 'دعوت از دوستان',
        url: '/invitefriends',
        direct: 'forward',
        icon: 'share'
      },
      {
        title: 'جایزه هفته',
        url: '/gift',
        direct: 'forward',
        icon: 'gift'
      },

      {
        title: 'تماس با ما',
        url: '/about',
        direct: 'forward',
        icon: 'call'
      },

      {
        title: 'پروفایل',
        url: '/settings',
        direct: 'forward',
        icon: 'contact'
      }
    ];

    this.initializeApp();
  }

  loadCurrentUser() {
    this.apiservice.getProfile().subscribe(response => {
        this.userProfile = response;
    });

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.authenticationService.authState.subscribe(state => {
        // if (state) {
          // this.router.navigate(['home-results']);
        // } else {
          this.router.navigate(['home-results']);
        // }
      });
      this.splashScreen.hide();

    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');

  }

  logout() {
    console.log('logged out');
    this.authenticationService.logout();
    this.navCtrl.navigateRoot('/');
  }
}
