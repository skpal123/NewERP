import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/admin/menu';
import { PostLoginService } from '../../services/common/post-login.service';
import { NavigationDataProiderService } from '../../shared/navigation-data-proider.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit,OnDestroy {
  menuAlreadyLoad:boolean=false
  menus:Menu[]=[];
  // menus=[
  //   {Id:1,Name:"Security",RouterPath:"/login/mainlayout/admin/1/security",MouduleId:1},
  //   {Id:2,Name:"Support",RouterPath:"/login/mainlayout/admin/1/support",MouduleId:1},
  //   {Id:3,Name:"Tool",RouterPath:"/login/mainlayout/admin/1/tool",MouduleId:1},
  //   {Id:4,Name:"Sub admin",RouterPath:"/login/mainlayout/1/admin/report",MouduleId:1},
  // ]
  constructor(private _activateRoute:ActivatedRoute,
    private _postLoginService:PostLoginService,
    private _navigaionDataProvider:NavigationDataProiderService) { }

  ngOnInit() {
    debugger
    this._activateRoute.paramMap.subscribe(param=>{
     var id= param.get("id");
     if(id==null){
      this.getMenusByModule("1");
     }
     else
     this.getMenusByModule(id);
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
  ngOnDestroy(){
    this._navigaionDataProvider.data=this.menus;
  }

}
