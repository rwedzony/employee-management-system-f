import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Employeeuser} from "../../../datamodels/employeeuser";
import {EmployeeService} from "../../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  hide=true;
  employeeUser: Employeeuser;
  constructor(private authService: AuthService,
              private employeeService: EmployeeService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.employeeUser=new Employeeuser();
    this.employeeUser.id=this.authService.getUserId();
    this.employeeUser.firstName=this.authService.getUserFirstName();
    this.employeeUser.lastName=this.authService.getUserLastName();
    this.employeeUser.email=this.authService.getUserLogin();
    this.employeeUser.password='';
  }


  submitChanges() {
    this.employeeService.updatePatchEmployee(this.employeeUser).subscribe(
        (value) => {this.authService.logout();
          this.router.navigateByUrl('');},
      (error) => {console.log('Error!!',error)},
      );
  }
}
