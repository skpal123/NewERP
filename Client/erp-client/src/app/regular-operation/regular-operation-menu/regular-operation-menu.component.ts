import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostLoginService } from '../../services/common/post-login.service';
import { Menu } from '../../models/admin/menu';

@Component({
  selector: 'app-regular-operation-menu',
  templateUrl: './regular-operation-menu.component.html',
  styleUrls: ['./regular-operation-menu.component.css']
})
export class RegularOperationMenuComponent implements OnInit {
  menuAlreadyLoad:boolean=false;
  menus:Menu[]=[];
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