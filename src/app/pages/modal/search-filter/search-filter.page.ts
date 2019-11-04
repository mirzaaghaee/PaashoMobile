import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ApiService} from '../../../services/api.service';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  public organizeby;
  public dishtype;
  public dishnationality;
  categroyData: any;

  constructor(private modalCtrl: ModalController, public apiService: ApiService) {
    this.categroyData = [];

   }
  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.apiService.getCategories().subscribe(response => {
      console.log(response);
      this.categroyData = response;
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
