import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'viewPro-Details-component',
    templateUrl: 'viewProDetails.template.html',
    styleUrls: ['viewProDetails.template.css'],
})
export class viewProDetailsComponent {
    panelOpenState = false;
    

    constructor(
        public dialogRef: MatDialogRef<viewProDetailsComponent>) { }


    onNoClick(): void {
        this.dialogRef.close();
    }


}
