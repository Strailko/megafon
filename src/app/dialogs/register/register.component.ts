import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  avatars = [
    "../../../assets/u1.png",
    "../../../assets/u2.png",
    "../../../assets/u3.png",
    "../../../assets/u4.png",
    "../../../assets/u5.png",
    "../../../assets/u6.png",
    "../../../assets/u7.png",
  ];
  avatarFlag = false;
  user: User = {
    id: 0,
    email: '',
    password: '',
    avatar: this.avatars[0]
  };

  constructor(private dialogRef : MatDialogRef<RegisterComponent>, private userService: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  register() {
    console.log("works");
    this.dialogRef.close(this.user);
  }
  
  dismiss(){
    this.dialogRef.close(null);
  }
  
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  bio = new FormControl('', [Validators.required]);
  avatar = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Полето е задолжително' : '';
  }

  getErrorMessagePass() {
    return this.password.hasError('required') ? 'Полето за лозинка е задолжително' : '';
  }
}
