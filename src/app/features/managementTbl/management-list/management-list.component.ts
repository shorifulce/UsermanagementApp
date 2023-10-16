import { Component, OnInit } from '@angular/core';
import { ManagementTbl } from '../models/managementTbl.model';
import { ManagementTblService } from '../services/management-tbl.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.css']
})
export class ManagementListComponent implements OnInit {

  managementInfo$?:Observable<ManagementTbl[]>;

  constructor(private managementService:ManagementTblService) {
   
  }
  ngOnInit(): void {
   this.managementInfo$=this.managementService.getAllManagement();  
  }

}
