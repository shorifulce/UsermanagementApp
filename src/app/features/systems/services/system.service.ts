import { Injectable } from '@angular/core';
import { AddSystemRequest } from '../../models/add-system-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { System } from '../../models/system.model';
import{environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http:HttpClient) { }


  addSystem(model:AddSystemRequest):Observable<void>
  {
     // return this.http.post<void>('${environment}/api/SystemTable',model)
      return this.http.post<void>(`${environment.apiBaseUrl}/api/SystemTable`, model);
  }

  getAllSystems():Observable<System[]>{
   // return this.http.get<System[]>('${environment.apiBaseUrl}/api/SystemTable')
    return this.http.get<System[]>(`${environment.apiBaseUrl}/api/SystemTable`);
  }
}
