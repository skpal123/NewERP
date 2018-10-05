import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-postlogin',
  templateUrl: './postlogin.component.html',
  styleUrls: ['./postlogin.component.css']
})
export class PostloginComponent implements OnInit {
  constructor(private _router:Router){}
  
  ngOnInit() {
  }  
  postlogin(){
    this._router.navigate(['login/mainlayout']);
  }
}
  
