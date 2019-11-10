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


@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})
export class MyeventsPage implements OnInit {

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
  addNewEvent() {

  }
}
