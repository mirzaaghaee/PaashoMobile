import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Mobile } from '../models/Mobile';

@Injectable()
export class AuthenticationService {

  authState = new BehaviorSubject(false);
  private userInfo: Mobile;
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    console.log('ifLoggedin');
    this.storage.get('USER_INFO').then((response) => {
      console.log(response);
      if (response) {
        this.authState.next(true);
      } else {
      this.router.navigate(['login']);
    }
    });
  }


  public async getUser(): Promise<Mobile> {
      this.userInfo = await this.storage.get('USER_INFO');
      return this.userInfo;
  }
  login(mobile: Mobile) {
    this.storage.set('USER_INFO', mobile).then((response) => {
      this.router.navigate(['home-results']);
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }



}
