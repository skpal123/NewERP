import { Component, OnInit } from '@angular/core';
import { Tree } from '../../../models/common/tree';
import { SecurityService } from '../../../services/admin/security.service';
import { AlertBoxService } from '../../../shared/alert-box.service';
import { DialogData } from '../../../models/common/dialog-data';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.css']
})
export class RolePermissionComponent implements OnInit {

  isFound:boolean=false;
  p:Tree[]=[]
//   tree:Tree[]=[{
//     Name:"Regular Operation",
//     Status:true,
//     Id:"1",
//     Checked:true,
//     IsClicked:false,
//     Children:
//      [
//       {
//        Name:"Finance",
//        Id:"2",
//        Status:true,
//        Checked:true,
//        IsClicked:false,
//        Children:[{
//           Name:"Voucher",
//           Id:"2",
//           Status:true,
//           IsClicked:false,
//           Checked:false,
//        }],
//       },
//       {
//         Name:"Fixed asset",
//         Status:true,
//         Id:"3",
//         Checked:true,
//         IsClicked:false,
//         Children:[{
//           Name:"Fixed asset opening",
//           Id:"16",
//           Status:true,
//           Checked:false,
//           IsClicked:false,
//           Children:[
//             {
//               Name:"Create",
//               Id:"17",
//               Status:true,
//               Checked:false,
//               IsClicked:false,
//             },
//             {
//               Name:"update",
//               Id:"18",
//               Status:true,
//               Checked:false,
//               IsClicked:false,
//             },
//             {
//               Name:"Delete",
//               Id:"18",
//               Status:true,
//               Checked:false,
//               IsClicked:false,
//             }
//           ]
//         }],
//        },
//        {
//         Name:"Inventory",
//         Status:true,
//         IsClicked:false,
//         Id:"4",
//         Checked:false,
//         Children:[{
//           Name:"salt-1",
//           Id:"12",
//           Status:true,
//           IsClicked:false,
//           Checked:false,
//         }],
//        }
//      ]
//   },
//   {
//     Name:"Master settings",
//     Status:true,
//     Id:"5",
//     Checked:false,
//     IsClicked:false,
//     Children:
//      [
//       {
//        Name:"alu",
//        Status:true,
//        Id:"6",
//        Checked:false,
//        IsClicked:false,
//        Children:[{
//         Name:"alu-1",
//         Id:"11",
//         Status:true,
//         IsClicked:false,
//         Checked:false,
//        }],
//       },
//       {
//         Name:"potol",
//         Status:true,
//         Id:"7",
//         Checked:false,
//         IsClicked:false,
//         Children:[{
//           Name:"potol-1",
//           Id:"9",
//           Status:true,
//           IsClicked:false,
//           Checked:false,
//         }],
//        },
//        {
//         Name:"lalsak",
//         Status:true,
//         IsClicked:false,
//         Id:"8",
//         Checked:false,
//         Children:[{
//           Name:"lalsak 1",
//           Id:"10",
//           Status:true,
//           IsClicked:false,
//           Checked:false
//         }],
//        }
//      ]
//   }
// ]
tree:Tree[]=[];
  constructor(private _securityService:SecurityService,private _alertBox:AlertBoxService) { }

  ngOnInit() {
    debugger
    this.getRolePermissons();
  }
  showCategory(id:number){
   var position= this.tree.findIndex(fea=>fea.Id==id.toString());
   if(this.tree[position].IsClicked){
    this.tree[position].IsClicked=false;
    this.tree[position].Children.forEach((a,b,array)=>{
      a.Status=true
    })
   }
   else{
    this.tree[position].IsClicked=true;
    this.tree[position].Children.forEach((a,b,array)=>{
      a.Status=false
    })
   }
   
  }
  showSubCategory(id:number){
    this.isFound=false;
      this.tree.forEach((subcategory,index,array)=>{
        if(!this.isFound){
          var position= subcategory.Children.findIndex(fea=>fea.Id==id.toString());
          if(position!=-1){
            this.isFound=true;
            if(subcategory.Children[position].IsClicked){
              subcategory.Children[position].IsClicked=false;
              for(var i=0;i<subcategory.Children[position].Children.length;i++){
                subcategory.Children[position].Children[i].Status=true;
              }
              
             }
             else{
              subcategory.Children[position].IsClicked=true;
              for(var i=0;i<subcategory.Children[position].Children.length;i++){
                subcategory.Children[position].Children[i].Status=false;
              }
             }
          }
        }
        
        
      })
   
  }
  showSubItem(id:number){
    this.isFound=false;
      this.tree.forEach((subcategory,index,array)=>{
        subcategory.Children.forEach((treeitem,index,array)=>{
          if(!this.isFound){
            var position= treeitem.Children.findIndex(fea=>fea.Id==id.toString());
            if(position!=-1){
              this.isFound=true;
              if(treeitem.Children[position].IsClicked){
                treeitem.Children[position].IsClicked=false;
                for(var i=0;i<treeitem.Children[position].Children.length;i++){
                  treeitem.Children[position].Children[i].Status=true;
                }               
               }
               else{
                treeitem.Children[position].IsClicked=true;
                for(var i=0;i<treeitem.Children[position].Children.length;i++){
                  treeitem.Children[position].Children[i].Status=false;
                }
               }
            }
          }
        })
      }) 
  }
  showItem(id:number){

  }
  selectedNode(item:any){
    console.log(item);
  }
getRolePermissons(){
  this._securityService.getRolePermissions().subscribe(response=>{
    this.tree=response.json();
    console.log(this.tree);
  },error=>{
    var data=new DialogData();
    var message=error.json();
    data.message=message.Message;
    this._alertBox.openDialog(data);
  })
}
}
