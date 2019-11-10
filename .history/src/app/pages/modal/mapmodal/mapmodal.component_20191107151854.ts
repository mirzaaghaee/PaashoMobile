import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PaashoEvent } from 'src/app/models/PaashoEvent';

@Component({
  selector: 'app-mapmodal',
  templateUrl: './mapmodal.component.html',
  styleUrls: ['./mapmodal.component.scss']
})
export class MapmodalComponent implements OnInit {
  @Input() value: any;
  @Input() item: PaashoEvent;


  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

}
