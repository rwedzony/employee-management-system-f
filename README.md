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

### Backend: [link to Backend](https://github.com/rwedzony/EmployeeManagementSystem)
+ Spring Boot
+ Spring Data JPA
+ Spring Security
+ PosgreSQL database
+ API secured by Spring Security and JWT generated token.
+ API docummented by Swagger


## Detailed app description

The app offers two roles of the users: normal user and admin. As app was initially created as intern system, adding new users (who are basically employees at the same time) function is only limited to accounts which have "ADMIN" priviledges. Every user need to log in to grant access to app functionality:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/login_page.png">
</p>

Login with bad credentials is impossible, which is indicated by Toastr non-blocking notification:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/login_badcredentials.png">
</p>

App layout consists of sliding side navigation menu, which enables access to different functionality, from which the most important is edit profile and tasks. Edit profile simply allows to change user credentials (first name, last name, email or password). As app uses JWT token to authorize users, every change in credentials is followed by logout from system action and login request, as token is no loger valid.

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/edit_profile.png">
</p>

### User role app functionality
Task module enables user to see, what tasks are assigned to him by admin and which of them have "NEW" status. After completing task, user can mark it as "DONE":

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/user_tasks.png">
</p>

User can also sent email to admin using his email client. There is plan to introduce "Vacation" module, where dayoff planing will take place. Dashboard is introduced to give user quick feedback of the tasks status: how many of them are assigned to particular user and what are their status:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/user_dashboard.png">
</p>

### Admin role app functionality
Admin app functionality is more extended than user. First of all, admin has rights to perform the CRUD operations on employees list (of course CRUD operations of his own profile is not allowed- he has to use edit profile as normal user instead)

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/employee_list.png">
</p>

The other admin module is extended task manager:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/tasks_list.png">
</p>

Admin can assign task to employee, edit task, and change task status from "DONE" to "NEW" as well as unassign. As tasks and employees are stored in DB using 1:N relationship, deleting particular empolyee indicates that all of his tasks become automatically unassigned.

There is also dashboard card for admin:

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/admin_dashboard.png">
</p>

which serves admin basic inforamtions of the current company state. This means how many employees are currently in DB, what is the sum of their salary. Also the detailed information about all system tasks is delivered: How many, how many of them are currently assign/ unassigned, how many has "NEW" as well as "DONE" status.
