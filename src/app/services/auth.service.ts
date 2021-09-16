import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {filter, map} from "rxjs/operators";

import {LoginRequestPayload} from "../datamodels/login-request.payload";
import {LoginResponsePayload} from "../datamodels/login-response.payload";
import { LocalStorageService } from 'ngx-webstorage';
import {BaseurlService} from "./baseurl.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginURL : string;

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService,
              private baseurl:BaseurlService) {
    this.loginURL=this.baseurl.getBaseUrl()+'/auth/login'
  }

  login(loginRequestPayload: LoginRequestPayload) {

    return this.httpClient.post<LoginResponsePayload>(this.loginURL,loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('id',data.id);
        this.localStorage.store('login',loginRequestPayload.username);
        this.localStorage.store('token', data.authToken);
        this.localStorage.store('firstName', data.firstName);
        this.localStorage.store('lastName', data.lastName);
        this.localStorage.store('role', data.role);
      }));
  }
  getUserLogin(){
    return this.localStorage.retrieve('login');
  }
  getJwtToken(){
    return this.localStorage.retrieve('token');
  }
  getUserFirstName(){
    return this.localStorage.retrieve('firstName');
  }
  getUserLastName(){
    return this.localStorage.retrieve('lastName');
  }
  getUserRole(){
    return this.localStorage.retrieve('role');
  }
  getUserId(){
    return this.localStorage.retrieve('id');
  }

  logout() {
    this.localStorage.clear('id');
    this.localStorage.clear('login');
    this.localStorage.clear('token');
    this.localStorage.clear('firstName');
    this.localStorage.clear('lastName');
    this.localStorage.clear('role');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
  
  isAdmin(): boolean{
    if(this.localStorage.retrieve('role') ==="ROLE_ADMIN")
      return true;
    else{
      return false;
    }
  }
}
