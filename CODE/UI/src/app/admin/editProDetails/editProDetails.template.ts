import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'editPro-Details-component',
    templateUrl: 'editProDetails.template.html',
    styleUrls: ['editProDetails.template.css'],
})
export class editProDetailsComponent {
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
        public dialogRef: MatDialogRef<editProDetailsComponent>) { }


    onNoClick(): void {
        this.dialogRef.close();
    }


}
