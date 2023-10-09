import { Component, OnDestroy } from '@angular/core';
import { AddSystemRequest } from '../../models/add-system-request.model';
import { SystemService } from '../services/system.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.css']
})
export class AddSystemComponent implements OnDestroy {

  model: AddSystemRequest;
  private addSystemSubscribtion?: Subscription;

  constructor(private systemService:SystemService,private router:Router)
   {
    this.model = {
      name: '',
      systemDetails: '',
      responsbleManagement:1
    };
  }

  onFormSubmit()
  {
    this.addSystemSubscribtion =  this.systemService.addSystem(this.model).subscribe({
      next:(response)=>{
    
        this.router.navigateByUrl('/admin/systems')

      },
      error:(error)=>
      {

      }
    })
  }

  ngOnDestroy(): void {
    this.addSystemSubscribtion?.unsubscribe();
  }


}
