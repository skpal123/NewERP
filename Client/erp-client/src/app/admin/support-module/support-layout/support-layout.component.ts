import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../../../services/common/post-login.service';
import { ActivatedRoute } from '@angular/router';
import { Submenu } from '../../../models/admin/submenu';

@Component({
  selector: 'app-support-layout',
  templateUrl: './support-layout.component.html',
  styleUrls: ['./support-layout.component.css']
})
export class SupportLayoutComponent implements OnInit {

  submenus:Submenu[]=[];
  constructor(private _postLoginService:PostLoginService,private _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(param=>{
      var id=param.get('id');
      this.getSubmnenuByMenuSeqId(id);
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
