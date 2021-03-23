import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, MinLengthValidator } from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
angForm!: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       password:['',Validators.required],
       pnumber:['',Validators.required]
    });
 
  }
  @ViewChild('ngOtpInput') ngOtpInputRef:any;


  login(){}
 expression1=false;
 expression2=false;
condition1=true;
  hideinput=true;
pnumber:string='';
email:string='';
pwdotp=false;
btn1=true;
btn2=true;
pass:string='';
otprow=false;

  ngOnInit(): void {}
  
emailtag(){
  this.expression1=true;
  this.expression2=false;
  this.btn2=false;
  this.btn1=true;
}

phonetag(){
  this.expression1=false;
  this.expression2=true;
  this.btn1=false;
  this.btn2=true;
}

loginemail(){
    this.expression1=true;
    this.expression2=false;
 
   
  var filter2=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
var filter1=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}/;
  if(filter2.test(this.email)&&filter1.test(this.pass))
  {
    console.log(this.pass+" "+this.email)
    if(this.email.indexOf('@gmail.com'))
    {
    console.log("validation")
    
    this.pwdotp=false;
   this.condition1=false;
    }
  
  else
  {
alert("check your email id no")
  }
}
else{
  alert("enter email id perperly")
}
}


loginphone(){
  this.expression2=true;
  this.expression1=false;
  this.otprow=true;

var filter = /[0-9\+\-\ ]/;
  if(filter.test(this.pnumber))
  {
   
    if(this.pnumber.length==10)
    {
      console.log(this.pnumber)
      console.log("validation")
      this.pwdotp = true;
      this.ngOtpInputRef='1234';
     console.log("button is working")
    }
  else
  {
alert("check your phone no")
  }
  }
  else{
    alert("enter phone no")
  }

}





}
