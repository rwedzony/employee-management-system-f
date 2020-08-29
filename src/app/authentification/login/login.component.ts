import { Component, OnInit } from '@angular/core';
 import {AuthenticationService} from "../../services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  message: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }
  hide=true;

  ngOnInit(): void {
  }
  submit(){

  }
  signIn() {
  let response=this.authenticationService.login(this.username,this.password);
  response.subscribe(data=>{
    this.message = data;
    this.router.navigate(['/ems/dashboard'])
  })

 // console.log(data))

}


}
