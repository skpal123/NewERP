import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  security:string="security";
  support:string="support"
  constructor(private _activatedRoute:ActivatedRoute) { }
  menus=[
    {Id:1,Name:"Security",RouterPath:"/login/mainlayout/admin/1/security",MouduleId:1},
    {Id:2,Name:"Support",RouterPath:"/login/mainlayout/admin/1/support",MouduleId:1},
    {Id:3,Name:"Tool",RouterPath:"/login/mainlayout/admin/1/tool",MouduleId:1},
    {Id:4,Name:"Sub admin",RouterPath:"/login/mainlayout/1/admin/report",MouduleId:1},
  ]
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(parammap=>{
     //alert( parammap.get('id'));
    })
  }

}
