import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Entity, EntityType, User } from '../shared/interfaces';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
  organisation = EntityType.ORGANISATION;
  initiative = EntityType.INITIATIVE;
  event = EntityType.EVENT;
  user: User = {
    id: 0,
    email: '',
    password: '',
    avatar: this.avatars[0]
  };
  profile: Entity = {
    id: 0,
    name: '',
    date: new Date,
    description: '',
    photo: 'https://i.ibb.co/KF2WBB3/u1.png',
    creator: this.user,
    category: '',
    members: []
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  type = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  photo = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
}
