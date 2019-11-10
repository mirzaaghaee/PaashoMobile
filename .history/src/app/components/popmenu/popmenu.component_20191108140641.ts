import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  routeToPage(event) {
    switch (event) {
      case 'home': {
        break;
      }
      case 'map': {
        this.navCtrl.navigateForward('map');
        break;
      }
      case 'profile': {
        this.navCtrl.navigateForward('edit-profile');
        break;
     }
     default: {
      this.navCtrl.navigateForward('home-results');
      break;
      }
   }

  }
  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

}
