import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';


@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.component.html',
  styleUrls: ['./addnewevent.component.scss']
})
export class AddneweventComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public apiService: ApiService
  )  { }

  ngOnInit() {
  }

}
