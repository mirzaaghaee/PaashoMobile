import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { eventType } from '../../services/eventType';
import {PaashoEvent} from '../../models/PaashoEvent';



@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.page.html',
  styleUrls: ['./addnewevent.page.scss'],
})
export class AddneweventPage implements OnInit {

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

}
