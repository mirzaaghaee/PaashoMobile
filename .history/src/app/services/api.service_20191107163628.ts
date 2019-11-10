import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpErrorResponse, HttpResponse, HttpHeaderResponse} from '@angular/common/http';
import {Category} from '../models/Category';
import {Observable, throwError} from 'rxjs';
import {retry, catchError, map} from 'rxjs/operators';
import {PaashoEvent} from '../models/PaashoEvent';
import {eventType} from './eventType';
import {Mobile} from '../models/Mobile';
import {apiPath} from './apiPath';
import {HTTP, HTTPResponse} from '@ionic-native/http/ngx';
import {jsonpCallbackContext} from '@angular/common/http/src/module';
import {Profile} from '../models/Profile';
import {DetailEvent} from '../models/DetailEvent';
import {Title} from '../models/Title';
import {MapEvent} from '../models/MapEvent';
import {Participant} from '../models/Participant';
import {Share} from '../models/Share';
import { promise } from 'protractor';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'image/jpeg',
    })
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // API path
    base_path = 'http://193.176.243.61';

    constructor(private http: HttpClient) {
    }

    // Http Options
    /*  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
     })
   };
  */


    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
    getImageUrl(id: number): string {
        return this.base_path + apiPath.downloadImage + '?id=' + id;
    }

    // Create a new item
    /* createItem(item): Observable<Categroy> {
      return this.http
        .post<Student>(this.base_path, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
   */
    // Get single student data by ID
    /* getItem(id): Observable<Student> {
      return this.http
        .get<Student>(this.base_path + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
   */

    // Get students data
    getCategories(): Observable<Category> {
        return this.http
            .get<Category>(this.base_path + apiPath.getAllCategories)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    getAllEvents(): Observable<PaashoEvent[]> {
        return this.http
            .get<PaashoEvent[]>(this.base_path + apiPath.event)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    getEventList(eventtype: eventType): Observable<PaashoEvent[]> {
        return this.http
            .get<PaashoEvent[]>(this.base_path + apiPath.getEvents + '?type=' + eventtype)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    getEventListPagination(eventtype: eventType, page: number, size: number): Observable<PaashoEvent[]> {
        console.log('page:' + page);
        return this.http
            .get<PaashoEvent[]>(this.base_path + apiPath.getEvents + '?type=' + eventtype + '&page=' + page + '&size=' + size
            + '&sort=desc')
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    getEventDetail(code: string): Observable<DetailEvent> {
        return this.http.get<DetailEvent>(this.base_path + apiPath.eventDetail + '/' + code + '/detail').pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getParticipants(code: string): Observable<Participant[]> {
        return this.http.get<Participant[]>(this.base_path + apiPath.event + '/' + code + '/participants').pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    share(code: string): Observable<Share> {
        return this.http.get<Share>(this.base_path + apiPath.event + '/' + code + '/share').pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    joinEvent(code: string): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.event + '/' + code + '/join', null).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getMapEventsByLatitudeAndLongitude(latitude: number, longitude: number): Observable<MapEvent[]> {
        return this.http.get<MapEvent[]>(this.base_path + apiPath.getMapEvents + '?longitude=' + longitude + '&latitude=' + latitude).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getAllMapEvents(): Observable<MapEvent[]> {
        return this.http.get<MapEvent[]>(this.base_path + apiPath.getAllMapEvents).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    sendMobileNumber(mobile: Mobile): Observable<string> {
        return this.http
            .post<string>(this.base_path + apiPath.postOTP, JSON.stringify(mobile), httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    confirmMobile(mobile: Mobile): Observable<any> {
        return this.http
            .post<HttpResponse<any>>(this.base_path + apiPath.confirmMobile, JSON.stringify(mobile)).pipe(
                retry(2),
                catchError(this.handleError)
            );
    }


    getComments(eventCode: string): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.base_path + apiPath.comment + eventCode).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    postComments(eventCode: string, comment: string): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.comment + eventCode, comment).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getProfile(): Observable<Profile> {
        return this.http.get<Profile>(this.base_path + apiPath.profile).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    inviteFriend(code: string): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.inviteFriend, code).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    changeAvatar(avatar: string): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.changeAvatar, avatar).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getProfileByUserId(userId: string): Observable<Profile> {
        return this.http.get<Profile>(this.base_path + apiPath.profileById + userId).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    postProfile(profile: Profile): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.profile, JSON.stringify(profile)).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    approvedNotification(notificationId: string): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.notifications + notificationId + '/approved', null).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    deniedNotification(notificationId: string): Observable<any> {
        return this.http.post<HttpResponse<any>>(this.base_path + apiPath.notifications + notificationId + '/cancel', null).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    getTitlesByCategory(category: string): Observable<Title[]> {
        return this.http.get<Title[]>(this.base_path + apiPath.event + '/' + category + '/titles').pipe(
            retry(2),
            catchError(this.handleError)
        );
    }
     async downloadEventImage(id: number): Promise<Blob> {

         const params = new HttpParams().set('id', id.toString());    // now it has aaa
        console.log(params);
         return  await this.http.get<Blob>( this.base_path + apiPath.downloadImage + '?id=' + id , httpOptions
         ).toPromise();
    }

    // Update item by id
    /* updateItem(id, item): Observable<Student> {
      return this.http
        .put<Student>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
   */
    // Delete item by id
    /*  deleteItem(id) {
       return this.http
         .delete<Student>(this.base_path + '/' + id, this.httpOptions)
         .pipe(
           retry(2),
           catchError(this.handleError)
         )
     }
    */
}
