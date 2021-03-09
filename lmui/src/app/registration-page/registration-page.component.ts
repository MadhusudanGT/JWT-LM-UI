import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  hide = true;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('BOTH PASSWORD MUST MATCH', "FILL THE FORM FIELDS", {
      duration: 5000,
    });
  }
  SuccessSnackBar(){
    this._snackBar.open('USER REGISTRATED SUCCESSFULLY', "..", {
      duration: 10000,
    });
  }
  ngOnInit(): void {
  }


  email: string='';
  nickName: string='';
  lastname:string='';
  password: string='';
  confirmpassword:string='';

  onSubmit(form: NgForm) {
    if (form.valid&&this.password===this.confirmpassword) {
      console.log(form.value);
      this.SuccessSnackBar();
      // ...our form is valid, we can submit the data
    }else{
      this.openSnackBar(); 
    }
  }
}

