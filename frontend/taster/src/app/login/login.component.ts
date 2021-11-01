import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  login: Login = {
    username: this.loginForm.controls.username.value,
    password: this.loginForm.controls.password.value
  }

  ngOnInit(): void {
  }

}
