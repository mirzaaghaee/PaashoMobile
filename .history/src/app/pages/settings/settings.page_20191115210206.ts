import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Profile} from '../../models/Profile';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  lang: any;
  enableNotifications: any;
  paymentMethod: any;
  currency: any;
  enablePromo: any;
  enableHistory: any;
  userProfile: any = [];

  languages: any = ['English', 'Portuguese', 'French'];
  paymentMethods: any = ['Paypal', 'Credit Card'];
  currencies: any = ['USD', 'BRL', 'EUR'];

  constructor(public navCtrl: NavController ,
              private apiservice: ApiService
    ) { }

  ngOnInit() {
     this.apiservice.getProfile().subscribe((response) => {
      this.userProfile = response;
     }
      );
  }

  editProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
