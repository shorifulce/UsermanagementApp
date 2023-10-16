import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddManagementRequest } from '../models/add-management-request.model';
import { Observable, Subscription } from 'rxjs';
import { ManagementTbl } from '../models/managementTbl.model';
import { ManagementTblService } from '../services/management-tbl.service';
import { Router } from '@angular/router';
import { Department } from '../../department/models/department.model';
import { DepartmentService } from '../../department/services/department-service.service';


@Component({
  selector: 'app-add-management-request',
  templateUrl: './add-management-request.component.html',
  styleUrls: ['./add-management-request.component.css']
})
export class AddManagementRequestComponent implements OnInit,OnDestroy {

  model: AddManagementRequest;
  private addManagementSubscribtion?: Subscription;
  departmentdata$?:Observable<Department[]>


  constructor(private mngService:ManagementTblService,private router:Router, private deptService:DepartmentService)
   {
    this.model = {
      firstName: '',
      lastName: '',
      gender: null,
      departmentId: null,
      typeofUser: null,
      designation: null,
      phone: '',
      email: '',
      registrationDate: null,
      dataEntryBy: '',
      userName: '',
      userPassword: '',
      startDate: '',
      workingPlace: null
      
    };
  }

  ngOnInit(): void {
   this.departmentdata$=this.deptService.getAllDepartment();
  }

  onFormSubmit()
  {

    this.addManagementSubscribtion =  this.mngService.addManagement(this.model).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/managements')
      },
      error:(error)=>
      {
          // show error
      }
    })
  }

  ngOnDestroy(): void {
    this.addManagementSubscribtion?.unsubscribe();
  }


}
