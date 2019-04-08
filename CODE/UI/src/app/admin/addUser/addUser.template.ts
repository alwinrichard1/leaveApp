import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CrudService } from 'app/shared/crud.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services

@Component({
    selector: 'app-add-user-component',
    templateUrl: 'addUser.template.html',
    styleUrls: ['addUser.template.css'],
})
export class AddUserComponent implements OnInit  {
    public studentForm: FormGroup;
    statuses = [
        { value: 'active', viewValue: 'Active' },
        { value: 'inactive', viewValue: 'Inactive' }
    ];

    shiftTimings = [
        { value: 'general', viewValue: 'General Shift' },
        { value: 'night', viewValue: 'Night Shift' }
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
        public crudApi: CrudService,
        public fb: FormBuilder, 
        public dialogRef: MatDialogRef<AddUserComponent>) { }

    ngOnInit() {
        this.studenForm();
    }    

    studenForm() {
        this.studentForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(2)]],
          email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        })  
      }

    onNoClick(): void {
        this.dialogRef.close();
    }

     // Accessing form control using getters
    get name() {
        return this.studentForm.get('name');
    }

    get email() {
        return this.studentForm.get('email');
    }

    get contact() {
        return this.studentForm.get('contact');
    }

    submitStudentData(){
        console.log(this.studentForm.value);
        this.crudApi.Adduser(this.studentForm.value);
    }


}
