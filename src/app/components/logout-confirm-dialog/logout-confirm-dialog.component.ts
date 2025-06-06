import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-confirm-dialog',
  templateUrl: './logout-confirm-dialog.component.html',
  styleUrls: ['./logout-confirm-dialog.component.css']
})
export class LogoutConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<LogoutConfirmDialogComponent>) { }
 
  onConfirm(): void{
    this.dialogRef.close(true);
  }
  onCancel():void{
    this.dialogRef.close(false);
  }

}
