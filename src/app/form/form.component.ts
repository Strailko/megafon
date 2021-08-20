import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { Entity, EntityType, User } from '../shared/interfaces';

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
  user: User = {};
  profile: Entity = {
    id: 0,
    name: '',
    type: EntityType.ORGANISATION,
    date: new Date,
    description: '',
    photo: 'https://pbs.twimg.com/profile_images/902285656776433666/1_oP0zrz_400x400.jpg',
    creator: this.user,
    category: '',
    members: []
  };
  entity: Entity = {};

  constructor(private dataService: DataService, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    let id = this.route.snapshot.paramMap.get('id') || '';
    if(id) {
      this.profile = this.dataService.getEntities().filter(x => x.id == Number(id))[0];
    }
  }

  type = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  photo = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);

  createEntity() {
    if(this.profile.name != '' && this.profile.description != '' && this.profile.category != '' && this.profile.photo != '') {
      this.entity = this.dataService.addEntity(this.profile);
      this.router.navigate(['/profile/view/' + this.entity.id]);
    }
  }
}
