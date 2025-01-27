import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, Observable } from 'rxjs';
import { Login } from '../../shared/models/account/login.dto';
import { ICheckUserAuthResult } from '../../shared/models/account/ICheckUserAuthResult';
import { IInformationAccount } from '../../shared/models/account/IInformationAccount';
import { CurrentUser } from '../../shared/models/account/currentuser';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {
  private currentUser: BehaviorSubject<CurrentUser | null> = new BehaviorSubject<CurrentUser | null>(null);


  constructor(
    private http: HttpClient
  ) {
  }
  loginAdmin(loginAdmin: Login): Observable<IInformationAccount> {
    return this.http.post<IInformationAccount>("/adminaccount/login", loginAdmin);
  }

  setCurrentUser(user: CurrentUser | null): void {
    this.currentUser.next(user);
  }
  
  getCurrentUser(): Observable<CurrentUser> {
    return this.currentUser.asObservable().pipe(
        filter((user): user is CurrentUser => user !== null)
    );
  }


  checkAdminAuth(): Observable<ICheckUserAuthResult> {
    return this.http.post<ICheckUserAuthResult>("/adminaccount/check-auth", null);
  }
  
  logOutUser(): Observable<any> {
    return this.http.get("/adminaccount/sign-out");
  }
  
}