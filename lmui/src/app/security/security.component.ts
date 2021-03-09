import { Component, OnInit } from '@angular/core';
import { JwtClientServiceService } from '../jwt-client-service.service';;
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  
  }

  public getAccessToken(authRequest){
  }



  

}
