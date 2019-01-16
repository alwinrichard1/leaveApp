import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'edit-Details-component',
    templateUrl: 'editDetails.template.html',
    styleUrls: ['editDetails.template.css'],
})
export class editDetailsComponent {
    panelOpenState = false;
    
    statuses = [
        { value: 'active', viewValue: 'Active' },
        { value: 'inactive', viewValue: 'Inactive' }
    ];

    shiftTimings = [
        { value: 'general', viewValue: 'General' },
        { value: 'night', viewValue: 'Night' }
    ];

    managers = [
        { value: 'u66666', viewValue: 'Prakash' },
        { value: 'u77777', viewValue: 'Sreenath' }
    ];

    projects = [
        { value: '1231', viewValue: 'Consumer team Consumer team' },
        { value: '22645', viewValue: 'Agent team' }
    ];

    userTypes = [
        { value: '12', viewValue: 'Manager' },
        { value: '23', viewValue: 'Lead' },
        { value: '12', viewValue: 'Member' }
    ];

    constructor(
        public dialogRef: MatDialogRef<editDetailsComponent>) { }


    onNoClick(): void {
        this.dialogRef.close();
    }


}
