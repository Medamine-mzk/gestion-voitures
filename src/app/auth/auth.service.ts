import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, catchError, tap, Observable, EMPTY } from 'rxjs';
import { Jeton } from './model/jeton.model';
import { User } from './model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://127.0.0.1:8000/api/login_check";
  public isLogged=false;
  USER_KEY = 'USER_KEY';
  CURR_USER = 'CURR_USER';
  user=new BehaviorSubject<User|null>(null);
  jeton=new BehaviorSubject<Jeton|null>(null);

  constructor(private http: HttpClient, private router : Router){}

  public login():void{
    this.router.navigate(["/login"]);
  }
  signIn(user: User){

    console.log('debut authentification');

    return this.http.post<Jeton>(this.url, user).pipe(
      catchError(this.handleError),
      tap(jeton =>{
        console.log('1111');
        this.handleAuthentication(jeton as Jeton,user);
        this.isLogged=true;
        this.router.navigate(['voitures']);
       })

    );


  }
  private handleError(err: HttpErrorResponse,caught: Observable<Jeton>):Observable<Input> {
    console.error('echec authentification');
    return EMPTY;
  }

  private handleAuthentication(jeton: Jeton,user: User){
    //console.log('2222');
    this.jeton.next(jeton);
    this.user.next(user);
    localStorage.setItem('jeton', JSON.stringify(jeton));
    this.saveUser(jeton,user);
    //window.location.reload();
  }

  public saveUser(jeton: Jeton,user: User): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(jeton));
    window.sessionStorage.removeItem(this.CURR_USER);
    window.sessionStorage.setItem(this.CURR_USER, JSON.stringify(user));
  }
  public logout(){
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.removeItem(this.CURR_USER);
    this.router.navigate([""]);
  }
  public loggedIn(){
    if (this.getUser()){
      return true;
    }else {
      return false;
    }
  }
  public getUser(){
    return window.sessionStorage.getItem(this.CURR_USER);
  }
  public getToken(){
    return window.sessionStorage.getItem(this.USER_KEY);
  }

}
