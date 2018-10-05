import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoFixedAssetLayoutComponent } from './ro-fixed-asset-layout/ro-fixed-asset-layout.component';
import { FixedAssetEntryComponent } from './fixed-asset-entry/fixed-asset-entry.component';

const routes: Routes = [
  {
    path:'',
    component:RoFixedAssetLayoutComponent,
    children:[
      {path:'',component:FixedAssetEntryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoFixedAssestRoutingModule { }
