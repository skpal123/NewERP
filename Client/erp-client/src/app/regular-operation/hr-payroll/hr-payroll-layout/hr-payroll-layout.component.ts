import { Component, OnInit } from '@angular/core';
import { Submenu } from '../../../models/admin/submenu';
import { PostLoginService } from '../../../services/common/post-login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hr-payroll-layout',
  templateUrl: './hr-payroll-layout.component.html',
  styleUrls: ['./hr-payroll-layout.component.css']
})
export class HrPayrollLayoutComponent implements OnInit {
  submenus:Submenu[]=[];
  constructor(private _postLoginService:PostLoginService,private _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    debugger
    this._activateRoute.paramMap.subscribe(param=>{
      var id=param.get('id');
      if(id==null){
        this.getSubmnenuByMenuSeqId("4");
      }
      else{
        this.getSubmnenuByMenuSeqId(id);
      }
    })
  }
  getSubmnenuByMenuSeqId(MenuSeqId:string){
    this._postLoginService.geSubMenus(MenuSeqId).subscribe(response=>{
      this.submenus=response.json();
    },error=>{
      var errorMessage=error.json();
      alert(errorMessage.Message);
    })
  }
}
