import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SystemListComponent } from './features/systems/system-list/system-list.component';
import { AddSystemComponent } from './features/systems/add-system/add-system.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditSystemComponent } from './features/systems/edit-system/edit-system.component';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';
import { AddEmployeeRequestComponent } from './features/employee/add-employee-request/add-employee-request.component';
import { UpdateEmployeeRequestComponent } from './features/employee/update-employee-request/update-employee-request.component';
import { ManagementListComponent } from './features/managementTbl/management-list/management-list.component';
import { AddManagementRequestComponent } from './features/managementTbl/add-management-request/add-management-request.component';
import { UpdateManagementRequestComponent } from './features/managementTbl/update-management-request/update-management-request.component';
import { LoginComponent } from './features/auth/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SystemListComponent,
    AddSystemComponent,
    EditSystemComponent,
    EmployeeListComponent,
    AddEmployeeRequestComponent,
    UpdateEmployeeRequestComponent,
    ManagementListComponent,
    AddManagementRequestComponent,
    UpdateManagementRequestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
