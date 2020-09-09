import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  baseURL: string;

  constructor() {

    this.baseURL="https://employ2es.herokuapp.com"
    //this.baseURL="http://localhost:8080";
  }
  getBaseUrl(){
    return this.baseURL;
  }

}
