import { Component, ViewEncapsulation ,OnInit} from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { Router } from '@angular/router';
import { JwtClientServiceService } from '../jwt-client-service.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-email-dash-board',
  templateUrl: './email-dash-board.component.html',
  styleUrls: ['./email-dash-board.component.css']
})
export class EmailDashBoardComponent implements OnInit {

  constructor(private router: Router,private service:JwtClientServiceService) { }

  ngOnInit(): void {
  }
  public selected = "Inbox";

  public items: Array<DrawerItem> = [
    { text: "Inbox", icon: "k-i-inbox", selected: true },
    { separator: true },
    { text: "Notifications", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { separator: true },
    { text: "Attachments", icon: "k-i-hyperlink-email" },
    { text: "Favourites", icon: "k-i-star-outline" }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

  btnClick(){
    this.router.navigateByUrl('/mailbox');
};

logout(){
  this.router.navigateByUrl('');
  localStorage.clear();
}
}
