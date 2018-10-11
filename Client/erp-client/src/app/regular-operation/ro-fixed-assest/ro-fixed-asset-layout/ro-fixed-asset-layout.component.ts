import { Component, OnInit } from '@angular/core';
import { Submenu } from '../../../models/admin/submenu';
import { PostLoginService } from '../../../services/common/post-login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ro-fixed-asset-layout',
  templateUrl: './ro-fixed-asset-layout.component.html',
  styleUrls: ['./ro-fixed-asset-layout.component.css']
})
export class RoFixedAssetLayoutComponent implements OnInit {
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
