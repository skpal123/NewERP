import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.css']
})
export class RolePermissionComponent implements OnInit {

  isFound:boolean=false;
  tree=[{
    "name":"grocery",
    "status":true,
    "id":1,
    "checked":true,
    "isClicked":false,
    "children":
     [
      {
       "name":"rice",
       "id":2,
       "status":true,
       "checked":true,
       "isClicked":false,
       "children":[{
        "name":"rice-1",
        "id":2,
        "status":true,
        "isClicked":false,
        "checked":false,
       }],
      },
      {
        "name":"paddy",
        "status":true,
        "id":3,
        "checked":true,
        "isClicked":false,
        "children":[{
          "name":"paddy-1",
          "status":true,
          "checked":false,
          "isClicked":false
        }],
       },
       {
        "name":"salt",
        "status":true,
        "isClicked":false,
        "id":4,
        "checked":false,
        "children":[{
          "name":"salt-1",
          "id":12,
          "status":true,
          "isClicked":false,
          "checked":false,
        }],
       }
     ]
  },
  {
    "name":"vegetables",
    "status":true,
    "id":5,
    "checked":false,
    "isClicked":false,
    "children":
     [
      {
       "name":"alu",
       "status":true,
       "id":6,
       "checked":false,
       "isClicked":false,
       "children":[{
        "name":"alu-1",
        "id":11,
        "status":true,
        "isClicked":false,
        "checked":false,
       }],
      },
      {
        "name":"potol",
        "status":true,
        "id":7,
        "checked":false,
        "isClicked":false,
        "children":[{
          "name":"potol-1",
          "id":9,
          "status":true,
          "isClicked":false,
          "checked":false,
        }],
       },
       {
        "name":"lalsak",
        "status":true,
        "isClicked":false,
        "id":8,
        "checked":false,
        "children":[{
          "name":"lalsak 1",
          "id":10,
          "status":true,
          "isClicked":false,
          "checked":false
        }],
       }
     ]
  }
]
  constructor() { }

  ngOnInit() {
    debugger
  }
  showCategory(id:number){
   var position= this.tree.findIndex(fea=>fea.id==id);
   if(this.tree[position].isClicked){
    this.tree[position].isClicked=false;
    this.tree[position].children.forEach((a,b,array)=>{
      a.status=true
    })
   }
   else{
    this.tree[position].isClicked=true;
    this.tree[position].children.forEach((a,b,array)=>{
      a.status=false
    })
   }
   
  }
  showSubCategory(id:number){
    this.isFound=false;
      this.tree.forEach((subcategory,index,array)=>{
        if(!this.isFound){
          var position= subcategory.children.findIndex(fea=>fea.id==id);
          if(position!=-1){
            this.isFound=true;
            if(subcategory.children[position].isClicked){
              subcategory.children[position].isClicked=false;
              for(var i=0;i<subcategory.children[position].children.length;i++){
                subcategory.children[position].children[i].status=true;
              }
              
             }
             else{
              subcategory.children[position].isClicked=true;
              for(var i=0;i<subcategory.children[position].children.length;i++){
                subcategory.children[position].children[i].status=false;
              }
             }
          }
        }
        
        
      })
   
  }
  showItem(id:number){

  }
  selectedNode(item:any){
    console.log(item);
  }

}
