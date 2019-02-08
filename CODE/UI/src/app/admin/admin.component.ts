import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectComponent } from './addProject/addProject.template';
import { AddUserComponent } from './addUser/addUser.template';
import { AddAbsenceTypesComponent } from './addAbsenceTypes/addAbsenceTypes.template';
import { viewDetailsComponent } from './viewDetails/viewDetails.template';
import { editDetailsComponent } from './editDetails/editDetails.template';
import { clearDetailsComponent } from './clearDetails/clearDetails.template';

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

  addAbsenceTypes(): void {
    const dialogRef = this.dialog.open(AddAbsenceTypesComponent, {
      width: '350px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 viewDetails(): void {
    const dialogRef = this.dialog.open(viewDetailsComponent, {
      width: '350px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  editDetails(): void {
    const dialogRef = this.dialog.open(editDetailsComponent, {
      width: '350px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  clearDetails(): void {
    const dialogRef = this.dialog.open(clearDetailsComponent, {
      width: '350px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
