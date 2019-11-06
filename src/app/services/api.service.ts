import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpResponse, HttpHeaderResponse} from '@angular/common/http';
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

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
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
            .get<PaashoEvent[]>(this.base_path + apiPath.getAllEvents)
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
        return this.http
            .get<PaashoEvent[]>(this.base_path + apiPath.getEvents + '?type=' + eventtype + '&page=' + page + ' &size=' + size)
            .pipe(
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

    confirmMobile2(mobile: Mobile) {
        return this.http
            .post(this.base_path + apiPath.confirmMobile, JSON.stringify(mobile));
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
