import { Component, OnInit } from '@angular/core';
import { JwtClientServiceService } from '../jwt-client-service.service';;
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest={
    "userName":"madhu",
    "password":"madhu@2020"
  };

  response:any;

  constructor(private service:JwtClientServiceService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
// let resp=this.service.generateToken(authRequest);
console.log(authRequest)
this.service.generateToken(authRequest)  
      .subscribe(async data => 
        console.log(data.toString()), error => console.log(error)
        
        );  
  }


  public accessApi(token){
let resp=this.service.welcome(token);
resp.subscribe(data=>this.response=data);
  }

}
