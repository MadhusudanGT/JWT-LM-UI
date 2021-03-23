import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './materials-module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RegistrationPageComponent} from "../app/registration-page/registration-page.component";
import {LoginPageComponent} from "../app/login-page/login-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailDashBoardComponent } from './email-dash-board/email-dash-board.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ContentComponent } from './content/content.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { AuthInterceptor } from './AuthInterceptor';
import { LoginComponent } from './login/login.component';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    EmailDashBoardComponent,
    ContentComponent,
    MailBoxComponent,
LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
        ButtonsModule,
        NgOtpInputModule
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }