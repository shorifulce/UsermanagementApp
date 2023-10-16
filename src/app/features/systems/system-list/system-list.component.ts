import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { System } from '../../systems/models/system.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css']
})
export class SystemListComponent implements OnInit {

  systems$?:Observable<System[]>;

constructor(private systemService:SystemService) {
 
}
ngOnInit(): void {
 this.systems$=this.systemService.getAllSystems();  
}

}
