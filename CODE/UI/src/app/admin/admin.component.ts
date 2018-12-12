import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectComponent } from './addProject/addProject.template';
import { AddUserComponent } from './addUser/addUser.template';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addProject(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '500px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
