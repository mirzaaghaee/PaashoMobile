import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ApiService } from '../../services/api.service';
import { eventType } from '../../services/eventType';
import {PaashoEvent} from '../../models/PaashoEvent';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-invitefriends',
  templateUrl: './invitefriends.page.html',
  styleUrls: ['./invitefriends.page.scss'],
})
export class InvitefriendsPage implements OnInit {
  public code: string;


  constructor(

    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public apiService: ApiService


) { }
  ionViewWillEnter() {
    console.log(eventType.TODAY.toString());
    console.log('ionViewWillEnter');
    this.menuCtrl.enable(true);

  }

  ngOnInit() {

  }
  invitedFriend() {
      console.log(this.code)
    this.apiService.inviteFriend(this.code).subscribe(response => {
      console.log(response);
    });
  }


}
