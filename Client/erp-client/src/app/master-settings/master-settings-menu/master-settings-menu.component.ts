import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostLoginService } from '../../services/common/post-login.service';
import { Menu } from '../../models/admin/menu';

@Component({
  selector: 'app-master-settings-menu',
  templateUrl: './master-settings-menu.component.html',
  styleUrls: ['./master-settings-menu.component.css']  
})
export class MasterSettingsMenuComponent implements OnInit {
  menus:Menu[]=[];
  menuAlreadyLoad:boolean=false;
  // menus=[
  //   {Id:1,Name:"Accounts Defination",RouterPath:"/login/mainlayout/master-settings/3/accounts-defination",MouduleId:3},
  //   {Id:2,Name:"Hr&&Payroll defination",RouterPath:"/login/mainlayout/master-settings/3/hr-payroll-defination",MouduleId:3},
  //   {Id:3,Name:"Fixed asset Defination",RouterPath:"/login/mainlayout/master-settings/3/fixed-asset-defination",MouduleId:3},
  //   {Id:4,Name:"Inventory defination",RouterPath:"/login/mainlayout/master-settings/3/inventory-defination",MouduleId:3},
  //   {Id:4,Name:"Geographical defination",RouterPath:"/login/mainlayout/master-settings/3/geographical-area-defination",MouduleId:3},
  // ]
  constructor(private _activateRoute:ActivatedRoute,private _postLoginService:PostLoginService) { }

  ngOnInit() {
    debugger
    this._activateRoute.paramMap.subscribe(param=>{
     var id= param.get("id");
    if(!this.menuAlreadyLoad){
      this.getMenusByModule(id);
    }
    })
  }
  getMenusByModule(moduleSeqId:string){
    this._postLoginService.getMenus(moduleSeqId).subscribe(response=>{
      this.menus=response.json();
      this.menuAlreadyLoad=true;
    },error=>{
      var errorMessage=error.json();
      alert(errorMessage.Message);
    })
  }

}
