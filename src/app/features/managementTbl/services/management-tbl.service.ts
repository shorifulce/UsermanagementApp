import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManagementTbl } from '../../managementTbl/models/managementTbl.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AddManagementRequestComponent } from '../add-management-request/add-management-request.component';
import { AddManagementRequest } from '../models/add-management-request.model';
import { UpdateManagementRequest } from '../models/update-management-request.model';

@Injectable({
  providedIn: 'root'
})
export class ManagementTblService {

  constructor(private http:HttpClient) { }

   getAllManagement():Observable<ManagementTbl[]>{
   
     return this.http.get<ManagementTbl[]>(`${environment.apiBaseUrl}/api/Management?addAuth=true`);
   }

   addManagement(model:AddManagementRequest):Observable<void>
   {
      
       return this.http.post<void>(`${environment.apiBaseUrl}/api/Management?addAuth=true`, model);
   }
 
   getManagementById(id:number):Observable<ManagementTbl>
   {
     return this.http.get<ManagementTbl>(`${environment.apiBaseUrl}/api/Management/${id}?addAuth=true`)
   }
    
   updateManagement(id: number, updateManagementRequest: UpdateManagementRequest) : Observable<ManagementTbl> {
    return this.http.put<ManagementTbl>(`${environment.apiBaseUrl}/api/Management/${id}?addAuth=true`,updateManagementRequest)
  }

  deleteManagement(id: number) : Observable<ManagementTbl> {
    return this.http.delete<ManagementTbl>(`${environment.apiBaseUrl}/api/Management/${id}?addAuth=true`)
  }
  


}
