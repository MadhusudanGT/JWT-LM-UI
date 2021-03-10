import { Component, OnInit , ViewEncapsulation,Input} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  @Input() 
  selectedItem!: string;
  constructor() { }

  ngOnInit(): void {
    
  }
 
}
