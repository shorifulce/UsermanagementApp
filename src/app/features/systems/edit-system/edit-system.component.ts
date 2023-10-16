import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SystemService } from '../services/system.service';
import { System } from '../../systems/models/system.model';
import { UpdateSystemRequest } from '../../systems/models/update-system-request';
import { ManagementTbl } from '../../managementTbl/models/managementTbl.model';
import { ManagementTblService } from '../../managementTbl/services/management-tbl.service';
@Component({
  selector: 'app-edit-system',
  templateUrl: './edit-system.component.html',
  styleUrls: ['./edit-system.component.css']
})
export class EditSystemComponent implements OnInit,OnDestroy{

  id:number| null=null;
  model?: System;
  managementTbldata$?:Observable<ManagementTbl[]>;
  selectedManagement?: number|null;


  routeSubscription?:Subscription;
  editSystemSubscription?:Subscription;
  getSystemSubscription?:Subscription;
   deleteSystemSubscription?:Subscription;

  constructor(private route:ActivatedRoute,
   private  systemService:SystemService,
   private router:Router,private managmentTblService:ManagementTblService) { }

  ngOnInit(): void {
    this.managementTbldata$=this.managmentTblService.getAllManagement();
    
      this.routeSubscription=this.route.paramMap.subscribe(
        {
          next:(params)=>
          {
            this.id=Number(params.get('id'));

             if(this.id)
             {
              // get the data from the api for this system 
              this.getSystemSubscription=this.systemService.getSystemById(this.id).subscribe(
                {
                  next:(response)=>
                  {
                   
                    this.model = response;
                    this.selectedManagement = response.responsbleManagement;
                  }
                }
              )
             
            }
          }
        });
  }
 
  onFormSubmit(): void {

     // Convert this model to Request Object
    if (this.model && this.id)
     {
        var updateSystemRequest:UpdateSystemRequest={
          name:this.model?.name?? '',
          systemDetails:this.model?.systemDetails?? '',
          responsbleManagement:this.selectedManagement?? null

        };

        // pass this object to service
   
        this.editSystemSubscription = this.systemService.updateSystem(this.id, updateSystemRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/systems');
          }
        });
     }
  
  }
  onDelete(): void {
    if (this.id) {
      this.systemService.deleteService(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/systems');
        }
      })
    }
  }


  ngOnDestroy(): void {

    this.routeSubscription?.unsubscribe();
    this.editSystemSubscription?.unsubscribe();
    this.getSystemSubscription?.unsubscribe();
    this.deleteSystemSubscription?.unsubscribe();
    
 }


}
