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
  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private apiservice: ApiService
  ) { }

  ngOnInit() {
  }
  logRatingChange(rating){
    console.log('changed rating:' , rating);
    // do your stuff
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
