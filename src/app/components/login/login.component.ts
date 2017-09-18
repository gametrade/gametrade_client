import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'gt-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public dialogRef: MdDialogRef<LoginComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close();
    }

}