import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-assigntaskdialog',
  templateUrl: './assigntaskdialog.component.html',
  styleUrls: ['./assigntaskdialog.component.scss']
})
export class AssigntaskdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AssigntaskdialogComponent>) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit(){

  }
  assignTask() {
    alert('assign task');
  }
}
