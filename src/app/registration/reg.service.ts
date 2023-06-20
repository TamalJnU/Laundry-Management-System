import { UserInfo } from './sign-in/signin.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const AUTH_API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  private url = "http://localhost:3000";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  errorHandler(error : any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  login(useremail : String, userpassword : String) : Observable <UserInfo[]> {
    return this.httpClient.get<UserInfo[]>(this.url + '/signup');
  }

  register (username : String, useremail : String, userpassword : String) : Observable<any>{
    return this.httpClient.post(AUTH_API + '/signup', {username, useremail, userpassword,}, this.httpOptions);
  }

  logout() : Observable <any> {
    return this.httpClient.post(this.url + '/signup', { }, this.httpOptions);
  }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token : string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user : UserInfo){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() : string | null {
    return sessionStorage.getItem(USER_KEY);
  }

  clear() : void {
    window.sessionStorage.clear();
  }

  public isLoggedIn() : boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }

}
