import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddSystemRequest } from '../../systems/models/add-system-request.model';
import { SystemService } from '../services/system.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ManagementTblService } from '../../managementTbl/services/management-tbl.service';
import { ManagementTbl } from '../../managementTbl/models/managementTbl.model';

@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.css']
})
export class AddSystemComponent implements OnInit,OnDestroy {

  model: AddSystemRequest;
  private addSystemSubscribtion?: Subscription;
  managementTbldata$?:Observable<ManagementTbl[]>


  constructor(private systemService:SystemService,private router:Router, private managmentTblService:ManagementTblService)
   {
    this.model = {
      name: '',
      systemDetails: '',
      responsbleManagement: null,
    };
  }

  ngOnInit(): void {
   this.managementTbldata$=this.managmentTblService.getAllManagement();
  }

  onFormSubmit()
  {

    this.addSystemSubscribtion =  this.systemService.addSystem(this.model).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/systems')
      },
      error:(error)=>
      {
          // show error
      }
    })
  }

  ngOnDestroy(): void {
    this.addSystemSubscribtion?.unsubscribe();
  }


}
