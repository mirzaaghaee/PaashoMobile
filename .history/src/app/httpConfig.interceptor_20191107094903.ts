import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  import { LoadingController } from '@ionic/angular';
  @Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    loaderToShow: any;
    constructor(public loadingController: LoadingController) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      request = request.clone({
        headers: request.headers.set('observe', 'response')
      });
      const token = localStorage.getItem('token');


      if (token) {
        request = request.clone({
          setHeaders: {
            'Authorization': token
          }
        });
      }
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          setHeaders: {
            'content-type': 'application/json'
          }
        });
      }
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json')
      });
      console.log('request is sent!');
      this.showLoader();
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.headers.get('Authorization') != null) {
              localStorage.setItem('token', event.headers.get('Authorization'));
            }
          }
          this.hideLoader();
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          this.hideLoader();
          return throwError(error);
        }));
    }
    showLoader() {
      this.loaderToShow = this.loadingController.create({
        message: 'لطفا کمی صبر کنید...'
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          console.log('Loading dismissed!');
        });
      });
      this.hideLoader();
    }

    hideLoader() {
        this.loadingController.dismiss();
    }

  }
