import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master-settings-menu',
  templateUrl: './master-settings-menu.component.html',
  styleUrls: ['./master-settings-menu.component.css']  
})
export class MasterSettingsMenuComponent implements OnInit {
  menus=[
    {Id:1,Name:"Accounts Defination",RouterPath:"/login/mainlayout/master-settings/3/accounts-defination",MouduleId:3},
    {Id:2,Name:"Hr&&Payroll defination",RouterPath:"/login/mainlayout/master-settings/3/hr-payroll-defination",MouduleId:3},
    {Id:3,Name:"Fixed asset Defination",RouterPath:"/login/mainlayout/master-settings/3/fixed-asset-defination",MouduleId:3},
    {Id:4,Name:"Inventory defination",RouterPath:"/login/mainlayout/master-settings/3/inventory-defination",MouduleId:3},
    {Id:4,Name:"Geographical defination",RouterPath:"/login/mainlayout/master-settings/3/geographical-area-defination",MouduleId:3},
  ]
  constructor(private _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(param=>{
     var id= param.get("id");
    })
  }

}
