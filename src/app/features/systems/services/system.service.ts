import { Injectable } from '@angular/core';
import { AddSystemRequest } from '../../systems/models/add-system-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { System } from '../../systems/models/system.model';
import{environment} from 'src/environments/environment'
import { UpdateSystemRequest } from '../../systems/models/update-system-request';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http:HttpClient) { }


 
  getAllSystems():Observable<System[]>{
   // return this.http.get<System[]>('${environment.apiBaseUrl}/api/SystemTable')
    return this.http.get<System[]>(`${environment.apiBaseUrl}/api/SystemTable`);
  }

  getSystemById(id:number):Observable<System>
  {
    return this.http.get<System>(`${environment.apiBaseUrl}/api/SystemTable/${id}`)
  }
   
  addSystem(model:AddSystemRequest):Observable<void>
  {
     // return this.http.post<void>('${environment}/api/SystemTable',model)
      return this.http.post<void>(`${environment.apiBaseUrl}/api/SystemTable?addAuth=true`, model);
  }

 
  updateSystem(id: number, updateSystemRequest: UpdateSystemRequest) : Observable<System> {
    return this.http.put<System>(`${environment.apiBaseUrl}/api/SystemTable/${id}?addAuth=true`,updateSystemRequest)
  }

  deleteService(id: number) : Observable<System> {
    return this.http.delete<System>(`${environment.apiBaseUrl}/api/SystemTable/${id}?addAuth=true`)
  }

}
