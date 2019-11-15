import { Component, ViewChild , OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';


// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
import { EventdetailPage } from './../modal/eventdetail/eventdetail.page';

// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ApiService } from '../../services/api.service';
import { eventType } from '../../services/eventType';
import {PaashoEvent} from '../../models/PaashoEvent';
import {jsonpCallbackContext} from '@angular/common/http/src/module';
import {AuthenticationService} from '../../services/Authentication.service';




@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  searchKey = '';
  yourLocation = 'Angry Monkey';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  eventList: PaashoEvent[];
  eventListPagination: PaashoEvent[];
  eventtype: eventType;
  page: number;
  size: number;
  base64data: any;
  converted_image: any;
  imagePath: string;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public apiService: ApiService,
    private authService: AuthenticationService
  ) {
    this.eventList = [];
    this.eventListPagination = [];
    this.eventtype = eventType.POPULAR;
    this.page = 0;
    this.size = 5;
    this.imagePath = '';


  }

  list: any[];


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.menuCtrl.enable(true);
    this.getFilteredEvents(this.eventtype);
      console.log(this.authService.getUserInfo.name);
}
  ionViewWillEnter() {
    console.log('home page enterance');
  }
  changeFilter(eventtype: string) {
    this.page = 0;
    this.eventList = [];
    this.eventListPagination = [];
    switch (eventtype) {
      case 'TODAY':
          this.eventtype = eventType.TODAY;
        break;
        case 'WEEK':
            this.eventtype = eventType.WEEK;
            break;
          case 'POPULAR':
              this.eventtype = eventType.POPULAR;
              break;
      default:
          this.eventtype = eventType.TODAY;
        break;
    }
    this.getFilteredEvents(this.eventtype);
  }

  getAllEvents() {
    this.apiService.getAllEvents().subscribe((response: PaashoEvent[]) => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        response[i].imageSrc = this.apiService.getImageUrl(response[i].pic) ;
        this.eventListPagination.push(response[i]);
      }
    });
  }
  getFilteredEvents(eventtype: eventType) {
    this.apiService.getEventListPagination(eventtype, this.page, this.size).subscribe((response: PaashoEvent[]) => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        response[i].imageSrc = this.apiService.getImageUrl(response[i].pic) ;
        this.eventListPagination.push(response[i]);
      }
    });
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.eventList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
    this.page += 1;
    this.getFilteredEvents(this.eventtype);
    console.log('page:' + this.page + 'size:' + this.size);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({

      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }
 async showEventDetail(eventitem: PaashoEvent){
  const modal = await this.modalCtrl.create({
    component: EventdetailPage,
    componentProps: { item: eventitem }
  });
  return await modal.present();

 }
  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
