import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  baseURL: string;

  constructor() {

    this.baseURL="http://localhost:8080"
  }
  getBaseUrl(){
    return this.baseURL;
  }

}
