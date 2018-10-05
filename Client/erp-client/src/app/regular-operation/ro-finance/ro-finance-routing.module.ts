import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceLayoutComponent } from './finance-layout/finance-layout.component';
import { VoucherEntryComponent } from './voucher-entry/voucher-entry.component';

const routes: Routes = [
  {
    path:'',
    component:FinanceLayoutComponent,
    children:[
      {path:'',component:VoucherEntryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoFinanceRoutingModule { }
