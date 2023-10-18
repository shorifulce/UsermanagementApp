import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemListComponent } from './features/systems/system-list/system-list.component';
import { AddSystemComponent } from './features/systems/add-system/add-system.component';
import { EditSystemComponent } from './features/systems/edit-system/edit-system.component';
import { ManagementListComponent } from './features/managementTbl/management-list/management-list.component';
import { AddManagementRequestComponent } from './features/managementTbl/add-management-request/add-management-request.component';
import { UpdateManagementRequestComponent } from './features/managementTbl/update-management-request/update-management-request.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent
  },
  
  {

    path:'admin/systems',
    component:SystemListComponent,
    canActivate: [authGuard]
  },
{
  path:'admin/systems/add',
  component:AddSystemComponent,
  canActivate: [authGuard]
},
{
  path:'admin/systems/:id',
  component:EditSystemComponent,
  canActivate: [authGuard]

},
{
  path:'admin/managements',
  component:ManagementListComponent,
  canActivate: [authGuard]
}
,
{
  path:'admin/managements/add',
  component:AddManagementRequestComponent,
  canActivate: [authGuard]
},
{
  path:'admin/managements/:id',
  component:UpdateManagementRequestComponent,
  canActivate: [authGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
