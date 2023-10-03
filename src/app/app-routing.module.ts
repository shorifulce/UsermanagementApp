import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemListComponent } from './features/systems/system-list/system-list.component';
import { AddSystemComponent } from './features/systems/add-system/add-system.component';

const routes: Routes = [
{
  path:'admin/systems',
  component:SystemListComponent
},{
  path:'admin/systems/add',
  component:AddSystemComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
