import { Component, OnInit } from '@angular/core';
import { DialogData } from '../../../models/common/dialog-data';
import { AlertBoxService } from '../../../shared/alert-box.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _alertBox:AlertBoxService) { }

  ngOnInit() {
  }
  GetAlertBox(){
    var dialogData=new DialogData();
    dialogData.title="Alert";
    dialogData.message="message.Message";
    this._alertBox.openDialog(dialogData)
  }
}
