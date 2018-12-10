import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectComponent } from './addProject/addProject.template';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '250px',
      data: { name: 'hi', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
