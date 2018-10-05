import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HrPayrollRoutingModule } from './hr-payroll-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HrPayrollLayoutComponent } from './hr-payroll-layout/hr-payroll-layout.component';

@NgModule({
  imports: [
    CommonModule,
    HrPayrollRoutingModule,
    DataTablesModule 
  ],
  declarations: [EmployeeComponent, EmployeeListComponent, HrPayrollLayoutComponent]
})
export class HrPayrollModule { }
