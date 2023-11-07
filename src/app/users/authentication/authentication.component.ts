import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersManagementService} from "../../../service/users-management.service";
import {LoginRequest} from "../../../model/request/LoginRequest";
import {Error, UserError} from "../../../model/Error";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css', '../users.component.scss']
})
export class AuthenticationComponent {
  public loginForm!: FormGroup;
  public userError!: UserError;

  constructor(private formBuilder: FormBuilder, public router: Router, private userManagementService: UsersManagementService) {
    this.initloginForm();
    this.userError = new UserError();
  }

  private initloginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      const loginFormValue = this.loginForm.value;

      const request = new LoginRequest(
        loginFormValue['email'],
        loginFormValue['password']
      )

      this.userManagementService.login(request);


      this.userError = this.userManagementService.userError.value
    }else{
      this.userError.setCurrentError(Error.FORM_ERROR);
    }
  }
}
