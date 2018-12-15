import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-add-absence-types-component',
    templateUrl: 'addAbsenceTypes.template.html',
    styleUrls: ['addAbsenceTypes.template.css'],
})
export class AddAbsenceTypesComponent {

    statuses = [
        { value: 'active', viewValue: 'Active' },
        { value: 'inactive', viewValue: 'Inactive' }
    ];
    projectStatus = 'active';

    constructor(
        public dialogRef: MatDialogRef<AddAbsenceTypesComponent>) { }


    onNoClick(): void {
        this.dialogRef.close();
    }


}
