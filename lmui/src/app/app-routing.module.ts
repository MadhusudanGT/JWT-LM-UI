import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from "./registration-page/registration-page.component"
import {LoginPageComponent} from "./login-page/login-page.component";
import {EmailDashBoardComponent} from "./email-dash-board/email-dash-board.component";
import {MailBoxComponent} from "./mail-box/mail-box.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  { path:'registration', component:RegistrationPageComponent },
  {path:'emailDashboard', component:EmailDashBoardComponent},
  {path:'mailbox', component:MailBoxComponent},
{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
