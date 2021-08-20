import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Entity, User } from '../shared/interfaces';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user: User = {};
  orgs: Entity[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.user = this.dataService.getUserById(Number(id))!;
    this.orgs = this.dataService.getEntities().filter(x => x.members?.includes(this.user));
  }

}
