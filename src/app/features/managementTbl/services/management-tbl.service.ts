import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManagementTbl } from '../../models/managementTbl.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementTblService {

  constructor(private http:HttpClient) { }

  getAllManagement():Observable<ManagementTbl[]>{
   
     return this.http.get<ManagementTbl[]>(`${environment.apiBaseUrl}/api/ManagementTbls`);
   }

}
