import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

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
    projectStatus = 'active';

    constructor(
        public dialogRef: MatDialogRef<AddProjectComponent>) { }


    onNoClick(): void {
        alert(1);
        this.dialogRef.close();
    }


}
