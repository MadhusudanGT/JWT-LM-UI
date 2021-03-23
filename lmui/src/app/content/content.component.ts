import { Component, OnInit , ViewEncapsulation,Input} from '@angular/core';
import { JwtClientServiceService } from '../jwt-client-service.service';
import { Email } from '../email';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  emails:any[]=[];
  store;
  @Input() 
  selectedItem!: string;
  constructor(private service:JwtClientServiceService) { }

  ngOnInit(): void {
    this.service.getEmail(localStorage.getItem('token')).subscribe(data=>{
this.emails.push(data);
console.log(this.emails)
    })
    
  }
  panelOpenState = false;
}




