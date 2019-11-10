import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PaashoEvent } from 'src/app/models/PaashoEvent';
import {ApiService} from '../../../services/api.service';
 import {DetailEvent} from '../../../models/DetailEvent';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.page.html',
  styleUrls: ['./eventdetail.page.scss'],
})
export class EventdetailPage implements OnInit {

  @Input() value: any;
  @Input() item: PaashoEvent;
  eventDetail: DetailEvent ;
  description: boolean;
  map: boolean;
  comment: boolean;
  share: boolean;

  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private apiservice: ApiService
  ) { }

  ngOnInit() {
    this.description = true;
    this.map = false;
    this.comment = false;
    this.share = false;
  }
  logRatingChange(rating){
    console.log('changed rating:' , rating);
    // do your stuff
}

TabsChange(event) {
  switch (event) {
    case 'description': {
      this.description = true;
      this.map = false;
      this.comment = false;
      this.share = false;
         break;
    }
    case 'share': {
      this.description = false;
      this.map = false;
      this.comment = false;
      this.share = true;
         break;
    }
    case 'map': {
      this.description = false;
      this.map = true;
      this.comment = false;
      this.share = false;
        break;
   }
   case 'comment': {
    this.description = false;
    this.map = false;
    this.comment = true;
    this.share = false;
    break;
 }

    default: { 
      this.description = true;
      this.map = false;
      this.comment = false;
      this.share = false;
         break;
    }
  console.log(event);
}
  async getEventDetail(code: string) {
      this.apiservice.getEventDetail(code).subscribe(response =>{
          this.eventDetail = response;
          console.log(response);
        }
        );
  }
  ionViewWillEnter() {
    this.getEventDetail(this.item.code);
  }


  closeModal() {
    this.modalCtrl.dismiss();
  }


}
