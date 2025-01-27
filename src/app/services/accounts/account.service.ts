import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { Register } from '../../shared/models/account/register.dto';
import { Login } from '../../shared/models/account/login.dto';
import { CurrentUser } from '../../shared/models/account/currentuser';
import { ICheckUserAuthResult } from '../../shared/models/account/ICheckUserAuthResult';
import { IInformationAccount } from '../../shared/models/account/IInformationAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUser: BehaviorSubject<CurrentUser | null> = new BehaviorSubject<CurrentUser | null>(null);


  constructor(
    private http: HttpClient
  ) {
  }

  registerCustomer(registerCustomer: Register): Observable<any> {
    return this.http.post<any>("/account/register-customer", registerCustomer);
  }

  loginUser(loginCustomer: Login): Observable<IInformationAccount> {
    return this.http.post<IInformationAccount>("/account/login", loginCustomer);
  }

  setCurrentUser(user: CurrentUser | null): void {
    this.currentUser.next(user);
  }
  
  getCurrentUser(): Observable<CurrentUser> {
    return this.currentUser.asObservable().pipe(
        filter((user): user is CurrentUser => user !== null)
    );
  }

  checkUserAuth(): Observable<ICheckUserAuthResult> {
    return this.http.post<ICheckUserAuthResult>("/account/check-auth", null);
  }
  
  logOutUser(): Observable<any> {
    return this.http.get("/account/sign-out");
  }
  
}

