import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  baseURL: string;

  constructor() {

    this.baseURL="https://employ2es.herokuapp.com"
  }
  getBaseUrl(){
    return this.baseURL;
  }

}
