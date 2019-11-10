import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/Authentication.service';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
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
        url: '/home-results',
        direct: 'root',
        icon: 'contacts'
      },
      {
        title: 'رویداد جدید',
        url: '/home-results',
        direct: 'root',
        icon: 'add-circle'
      },
      {
        title: 'گفتگوها',
        url: '/home-results',
        direct: 'root',
        icon: 'chatboxes'
      },
      {
        title: 'دعوت از دوستان',
        url: '/home-results',
        direct: 'root',
        icon: 'share'
      },
      {
        title: 'جایزه هفته',
        url: '/home-results',
        direct: 'root',
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
        icon: 'user'
      }
    ];

    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['home-results']);
        } else {
          this.router.navigate(['login']);
        }
      });
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
