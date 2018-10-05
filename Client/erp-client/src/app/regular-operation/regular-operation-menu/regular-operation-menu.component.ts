import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regular-operation-menu',
  templateUrl: './regular-operation-menu.component.html',
  styleUrls: ['./regular-operation-menu.component.css']
})
export class RegularOperationMenuComponent implements OnInit {
  menus=[
    {Id:1,Name:"Hr && payroll",RouterPath:"/login/mainlayout/regular-operation/2/hr-payroll",MouduleId:1},
    {Id:2,Name:"Accounts",RouterPath:"/login/mainlayout/regular-operation/2/accounts",MouduleId:1},
    {Id:3,Name:"Inventory",RouterPath:"/login/mainlayout/regular-operation/2/inventory",MouduleId:1},
    {Id:4,Name:"Fixed asset",RouterPath:"/login/mainlayout/regular-operation/2/fixed-asset",MouduleId:1},
    {Id:5,Name:"Providend fund",RouterPath:"/login/mainlayout/regular-operation/2/provident-fund",MouduleId:1},
    {Id:2,Name:"Finance",RouterPath:"/login/mainlayout/regular-operation/2/finance",MouduleId:1},
    
  ]
  constructor(private _activatedRoute:ActivatedRoute) { }  

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(parammap=>{
     alert( parammap.get('id'));
    })
  }

}
