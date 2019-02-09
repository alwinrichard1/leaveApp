import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'clearPro-Details-component',
    templateUrl: 'clearProDetails.template.html',
    styleUrls: ['clearProDetails.template.css'],
})
export class clearProDetailsComponent {
    panelOpenState = false;

    constructor(
        public dialogRef: MatDialogRef<clearProDetailsComponent>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    
}
