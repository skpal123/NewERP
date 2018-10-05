import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoFinanceRoutingModule } from './ro-finance-routing.module';
import { FinanceLayoutComponent } from './finance-layout/finance-layout.component';
import { VoucherEntryComponent } from './voucher-entry/voucher-entry.component';

@NgModule({
  imports: [
    CommonModule,
    RoFinanceRoutingModule
  ],
  declarations: [FinanceLayoutComponent, VoucherEntryComponent]
})
export class RoFinanceModule { }
