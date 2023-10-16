import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemListComponent } from './features/systems/system-list/system-list.component';
import { AddSystemComponent } from './features/systems/add-system/add-system.component';
import { EditSystemComponent } from './features/systems/edit-system/edit-system.component';
import { ManagementListComponent } from './features/managementTbl/management-list/management-list.component';
import { AddManagementRequestComponent } from './features/managementTbl/add-management-request/add-management-request.component';
import { UpdateManagementRequestComponent } from './features/managementTbl/update-management-request/update-management-request.component';

const routes: Routes = [
{
  path:'admin/systems',
  component:SystemListComponent
},
{
  path:'admin/systems/add',
  component:AddSystemComponent
},
{
  path:'admin/systems/:id',
  component:EditSystemComponent

},
{
  path:'admin/managements',
  component:ManagementListComponent
}
,
{
  path:'admin/managements/add',
  component:AddManagementRequestComponent
},
{
  path:'admin/managements/:id',
  component:UpdateManagementRequestComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
