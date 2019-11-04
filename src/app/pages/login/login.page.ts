import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import {ApiService} from '../../services/api.service';
import {Mobile} from '../../models/Mobile';
import { HttpResponse, HttpHeaderResponse, HttpEvent } from '@angular/common/http';
import { HTTPResponse } from '@ionic-native/http/ngx';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  public activateCode: boolean;
  public mobile: Mobile = {mobile : '09350719980' , code : ''};
  public token: string;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private apiservice: ApiService
  ) {
    this.activateCode = false;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'phone': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    console.log('navigating root');

    this.navCtrl.navigateRoot('/home-results');
  }

  sendActivationCode() {

    this.apiservice.sendMobileNumber(this.mobile).subscribe(response => {
      console.log(response);
      this.activateCode =  true;
    });
  }
  confirmCode() {
    this.apiservice.confirmMobile(this.mobile).subscribe((response)  => {
      if (response === 200 ) {
//        console.log('token:' + this.token);
        this.goToHome();
      }

    });
  }}
