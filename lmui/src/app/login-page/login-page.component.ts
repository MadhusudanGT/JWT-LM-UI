import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { JwtClientServiceService } from '../jwt-client-service.service';
import { TokenStorageService } from '../TokenStorageService';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})



export class LoginPageComponent implements OnInit {
  hide = true;
  
  user: string='';
  password:string='';
  constructor(private router: Router,private _snackBar: MatSnackBar,private service:JwtClientServiceService,private tokenStorage: TokenStorageService) {}

  openSnackBar() {
    this._snackBar.open('PLEASE FILL VALIDE DETAILS', "!!!!", {
      duration: 5000,
    });
  }
  SuccessSnackBar(){
    this._snackBar.open('USER LOGIN SUCCESSFULLY', ":))))", {
      duration: 10000,
    });
  }

  onSubmit(form:NgForm){
if (form.valid) {
  console.log(form.value);
 const authRequest={
    "userName":form.value.user,
    "password":form.value.password
  };
  this.getAccessToken(authRequest);
  // ...our form is valid, we can submit the data
}else{
  this.openSnackBar(); 
}
  }

  ngOnInit() {
    
  }

  public getAccessToken(authRequest){
// let resp=this.service.generateToken(authRequest);
console.log(authRequest)
this.service.generateToken(authRequest)  
      .subscribe(data => 
       {
         if(data){
          console.log(data.toString())
           localStorage.setItem('token',data.toString())
          this.tokenStorage.saveToken(data.toString());
          this.tokenStorage.saveUser(authRequest);
          this.accessApi(data)
          this.SuccessSnackBar()
          this.router.navigate(['emailDashboard']);
         }
         else{
          error => console.log(error)
         }
       }
        
        );  
  }
response:any='';

  public accessApi(token){
this.service.welcome(token)  
      .subscribe(async data => {
        this.response=data;
console.log("auth"+data);
      })
  }

 
}
