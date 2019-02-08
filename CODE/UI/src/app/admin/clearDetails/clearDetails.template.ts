import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'clear-Details-component',
    templateUrl: 'clearDetails.template.html',
    styleUrls: ['clearDetails.template.css'],
})
export class clearDetailsComponent {
    panelOpenState = false;

    constructor(
        public dialogRef: MatDialogRef<clearDetailsComponent>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    
}
