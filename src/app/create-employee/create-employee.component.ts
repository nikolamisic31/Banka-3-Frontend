import { Component } from '@angular/core';
import {Employee, Permission} from "../models/models";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee = {} as Employee;
  dtEmployee: string = ''
  permissions: Permission[] | null = null;
  constructor(private userService: UserService, private router : Router) {

  }


  save(){
    let dt = new Date(this.dtEmployee).getDate()
    this.employee.dateOfBirth = dt;
    console.log(this.employee.dateOfBirth)
    this.userService.createEmployee(this.employee).subscribe(res => {

      console.log(res)
      this.router.navigate(['user-list'])
    })
  }

}