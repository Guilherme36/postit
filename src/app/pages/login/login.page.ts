import { Component } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.Payload'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() {
  }

  public email: string = '';
  public password: string = '';

  public loginPayload: LoginPayload = {
    email: '',
    password: ''
  }
  public login(): void {
    console.log("payload ->", this.loginPayload.email, this.loginPayload.password);
  }

}
