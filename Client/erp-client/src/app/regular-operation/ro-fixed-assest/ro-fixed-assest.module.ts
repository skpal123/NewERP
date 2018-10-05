import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoFixedAssestRoutingModule } from './ro-fixed-assest-routing.module';
import { RoFixedAssetLayoutComponent } from './ro-fixed-asset-layout/ro-fixed-asset-layout.component';
import { FixedAssetEntryComponent } from './fixed-asset-entry/fixed-asset-entry.component';

@NgModule({
  imports: [
    CommonModule,
    RoFixedAssestRoutingModule
  ],
  declarations: [RoFixedAssetLayoutComponent, FixedAssetEntryComponent]
})
export class RoFixedAssestModule { }
