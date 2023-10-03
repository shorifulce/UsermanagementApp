import { Injectable } from '@angular/core';
import { AddSystemRequest } from '../../models/add-system-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http:HttpClient) { }


  addSystem(model:AddSystemRequest):Observable<void>
  {
      return this.http.post<void>('https://localhost:7015/api/SystemTable',model)
  }
}
