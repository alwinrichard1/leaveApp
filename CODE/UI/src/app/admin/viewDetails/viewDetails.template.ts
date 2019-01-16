import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'view-Details-component',
    templateUrl: 'viewDetails.template.html',
    styleUrls: ['viewDetails.template.css'],
})
export class viewDetailsComponent {
    panelOpenState = false;
    

    constructor(
        public dialogRef: MatDialogRef<viewDetailsComponent>) { }


    onNoClick(): void {
        this.dialogRef.close();
    }


}
