import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = '';
  password: string = '';
  constructor() { }
  hide=true;
  ngOnInit(): void {
  }


  SignIn() {
    let login1=this.login;
    let pass1=this.password;
    this.login='';
    this.password='';
    console.log('login:' + login1);
    console.log('password:' + pass1);

  }
}
