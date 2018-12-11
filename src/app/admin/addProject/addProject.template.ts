import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-add-project-component',
    templateUrl: 'addProject.template.html',
    styleUrls: ['addProject.template.css'],
})
export class AddProjectComponent {

    statuses = [
        { value: 'active', viewValue: 'Active' },
        { value: 'inactive', viewValue: 'Inactive' }
    ];

    constructor(
        public dialogRef: MatDialogRef<AddProjectComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


    onNoClick(): void {
        this.dialogRef.close();
    }


}
