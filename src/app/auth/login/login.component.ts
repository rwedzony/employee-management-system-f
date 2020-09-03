import { Component, OnInit } from '@angular/core';
 import {AuthService} from "../../services/auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import {LoginRequestPayload} from "../../datamodels/login-request.payload";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  username='';
  password='';
  loginPayload: LoginRequestPayload;


  constructor(private router: Router,
              private authService: AuthService) {
    this.loginPayload = {username:'', password: ''};

  }
  hide=true;

  ngOnInit(): void {
  }
  submit(){

  }
  signIn() {
    this.authService.login(this.loginPayload).subscribe( data => {
      alert('login succesfull!!');

      let urlToNavigate:string;
      if(this.authService.isAdmin()){
        urlToNavigate='ems/dashboardadmin';
      }
      else {
        urlToNavigate='ems/dashboarduser';
      }
        this.router.navigateByUrl(urlToNavigate);
    },
      error => {
      console.error('BAD CREDENTIALS');
      });

}


}