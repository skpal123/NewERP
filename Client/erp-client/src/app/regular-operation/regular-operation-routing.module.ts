import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularOperationMenuComponent } from './regular-operation-menu/regular-operation-menu.component';

const routes: Routes = [
  {
    path:'',
    component:RegularOperationMenuComponent,  
    children:[
      {
        path:'',
        loadChildren:'src/app/regular-operation/hr-payroll/hr-payroll.module#HrPayrollModule'
      }
      
    ]
  },
  {
    path:'accounts/:id',
    component:RegularOperationMenuComponent,  
    children:[
      {
        path:'',
        loadChildren:'src/app/regular-operation/accounts/accounts.module#AccountsModule'
      }
      
    ]
  },
  {
    path:'hr-payroll/:id',
    component:RegularOperationMenuComponent,  
    children:[
      {
        path:'',
        loadChildren:'src/app/regular-operation/hr-payroll/hr-payroll.module#HrPayrollModule'
      }
      
    ]
  },
  {
    path:'finance/:id',
    component:RegularOperationMenuComponent,  
    children:[
      {
        path:'',
        loadChildren:'src/app/regular-operation/ro-finance/ro-finance.module#RoFinanceModule'
      }
      
    ]
  },
  {
    path:'fixed-asset/:id',
    component:RegularOperationMenuComponent,  
    children:[
      {
        path:'',
        loadChildren:'src/app/regular-operation/ro-fixed-assest/ro-fixed-assest.module#RoFixedAssestModule'
      }
      
    ]
  },
  {
    path:'inventory/:id',
    component:RegularOperationMenuComponent,  
    children:[
      {
        path:'',
        loadChildren:'src/app/regular-operation/ro-inventory/ro-inventory.module#RoInventoryModule'
      }  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularOperationRoutingModule { }
