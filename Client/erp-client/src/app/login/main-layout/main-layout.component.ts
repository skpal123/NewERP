import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  modules=[  
    {Name:"Admin",RouterPath:"admin",Id:1},
    {Name:"Regular Operation",RouterPath:"regular-operation",Id:2},
    {Name:"Master Settings",RouterPath:"master-settings",Id:3},
    {Name:"Report",RouterPath:"report",Id:4},
  ]
  constructor() { }

  ngOnInit() {
  }

}
