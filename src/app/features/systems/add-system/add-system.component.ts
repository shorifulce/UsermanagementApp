import { Component } from '@angular/core';
import { AddSystemRequest } from '../../models/add-system-request.model';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.css']
})
export class AddSystemComponent {

  model: AddSystemRequest;

  constructor(private systemService:SystemService)
   {
    this.model = {
      name: '',
      systemDetails: '',
      responsbleManagement:1
    };
  }

  onFormSubmit()
  {
    this.systemService.addSystem(this.model).subscribe({
      next:(response)=>{
      console.log('This is successful')
      },
      error:(error)=>
      {

      }
    })
  }

}
