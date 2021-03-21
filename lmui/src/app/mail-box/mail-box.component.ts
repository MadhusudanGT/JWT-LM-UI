import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
user:string='';
email:string='';
subject:string='';
message:string='';

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    console.log(form)
  }
}
