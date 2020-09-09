# Employees Management System 
Employees Management System is the full stack web app, which was created for simplifying task managing and other daily routines which are everyday life in many companies. 

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/tasks_list.png">
</p>

## Tech stack:
### Frontend: 
+ Angular CLI v. 10
+ Angular Material UI Component library (mat-table, mat-buttons, mat-dialog, color theme Indigo-pink).
+ Toastr notifications

### Backend: 
+ Spring Boot App
+ Spring Data JPA
+ PosgreSQL database
+ API secured by Spring Security and JWT generated token.
+ API docummented by Swagger


## Detailed app description

The App offers two roles of the users: normal user and admin. As App was initially created as intern system, adding new users (who are basically employees at the same time) function is only limited to accounts which have "ADMIN" priviledges. Every user need to login in to grant access to App functionality:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/login_page.png">
</p>

Login with bad credentials is impossible, which is indicated by Toastr non-blocking notification:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/login_badcredentials.png">
</p>

App layout consist of sliding side navigation menu, which enables access to different functionality, from which the most important is "Edit Profile" and "Tasks". Edit profile simply allow to change user credentials (first name, last name, email or password). As App uses JWT token to authorize users, every change in credentials is followed by login request, as token is no loger walid.

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/edit_profile.png">
</p>

### USER role app functionality
Task module enables user to see, what tasks are assigned to him by Admin and which of them have "NEW" status. After completing task, user can mark it as "DONE":

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/user_tasks.png">
</p>

User also can sent email to admin using his mail client. There is also plan to introduce "Vacation" module, where dayoff planining will take place. Dashboard is introduced to give user quick feedback of the task status: how many of them are assigned to particular user and what are their status:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/user_dashboard.png">
</p>

### ADMIN role app functionality
Admin app functionality is more extended than user. First of all, admin has rigths to perform the CRUD operations on Employee list:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/employee_list.png">
</p>

The other admin module is extended task manager:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/tasks_list.png">
</p>

Admin can assign task to employee, edit task, and change task status from "DONE" to "NEW" as well as unassign. As Task and Employee are in 1:M relationship, deleting particular empolyee indicates that all of his tasks become automatically unassigned.

