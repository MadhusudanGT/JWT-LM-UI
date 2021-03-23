import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { JwtClientServiceService } from '../jwt-client-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router} from '@angular/router';


@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
username:string='';
email:string='';
subject:string='';
message:string='';

  constructor(private router: Router,private service:JwtClientServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getEmail(localStorage.getItem('token')).subscribe(data=>{
      console.log("all mails"+data)
    })
  }

  openSnackBar() {
    this._snackBar.open('PLEASE login or FILL VALIDE DETAILS', "!!!!", {
      duration: 5000,
    });
  }
  SuccessSnackBar(){
    this._snackBar.open('EMAIL SENDED SUCCESSFULLY', ":))))", {
      duration: 10000,
    });
  }

  onSubmit(form:NgForm){
    console.log(form)
    if(localStorage.getItem('token')){
      this.sendEmail(form)
      this.SuccessSnackBar();
        this.router.navigateByUrl('emailDashboard');}
    else{
      this.openSnackBar()
    }
    
  }

  sendEmail(form){
    this.service.sendEmail(form).subscribe( data=>{
      console.log(data)  
    })
  }

  logout(){
    this.router.navigateByUrl('');
  }
}
