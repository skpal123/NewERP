import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UsersComponent } from './users/users.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { SecurityLayoutComponent } from './security-layout/security-layout.component';
import {CommonModuleModule} from 'src/app/common-module/common-module.module'
@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule,
    CommonModuleModule
  ],
  declarations: [UsersComponent, RolePermissionComponent, SecurityLayoutComponent]
})
export class SecurityModule { }
