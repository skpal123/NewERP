import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/common/session.service';
@Component({
  selector: 'app-postlogin',
  templateUrl: './postlogin.component.html',
  styleUrls: ['./postlogin.component.css']
})
export class PostloginComponent implements OnInit {
  constructor(private _router:Router,private _sessionService:SessionService){}
  UserSession:any
  BranchList:any;
  ngOnInit() {
    this.BranchList=this._sessionService.BranchList;
  }  
  loadMenus(Id:string){
    debugger
    sessionStorage.setItem('selectedBranchId',Id);
    console.log(this._sessionService.Modules)
    console.log(JSON.parse(sessionStorage.getItem('loggedData')))
    this._router.navigate(['login/mainlayout']);
  }
}
  
