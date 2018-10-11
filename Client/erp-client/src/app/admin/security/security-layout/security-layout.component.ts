import { Component, OnInit } from '@angular/core';
import { Submenu } from '../../../models/admin/submenu';
import { ActivatedRoute } from '@angular/router';
import { PostLoginService } from '../../../services/common/post-login.service';

@Component({
  selector: 'app-security-layout',
  templateUrl: './security-layout.component.html',
  styleUrls: ['./security-layout.component.css']
})
export class SecurityLayoutComponent implements OnInit {

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
