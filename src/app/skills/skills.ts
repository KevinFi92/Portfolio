import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ContactDialog} from '../contact-dialog/contact-dialog';

@Component({
  selector: 'app-skills',
  imports: [MatButton, MatDialogModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

constructor(public dialog: MatDialog) {
}

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialog, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {

      }
    });
  }
}
