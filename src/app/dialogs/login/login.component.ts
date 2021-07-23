import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    id: 0,
    email: '',
    password: ''
  };

  constructor(private dialogRef : MatDialogRef<LoginComponent>, private userService: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  login() {
    console.log("works");
    this.dialogRef.close(this.user);
  }
  
  dismiss(){
    this.dialogRef.close(null);
  }
  
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Мора да внесете валидна email адреса' : '';
  }

  getErrorMessagePass() {
    return this.password.hasError('required') ? 'Полето за лозинка е задолжително' : '';
  }
}
