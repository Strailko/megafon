import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Entity, EntityType, User } from '../shared/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  type: string = '';
  query: string = '';
  entities: Entity[] = [];
  users: User[] = [];
  orgs: Entity[] = [];
  events: Entity[] = [];
  initiatives: Entity[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.entities = this.dataService.getEntities();
    this.users = this.dataService.getUsers();
    this.query = this.route.snapshot.paramMap.get('query') || '';
    if(this.query == '*') {
      this.query = '';
    }
    this.type = this.route.snapshot.paramMap.get('type') || '';
    if(this.query) {
      this.entities = this.entities.filter(x => x.category?.includes(this.query) || x.description?.includes(this.query) || x.name?.includes(this.query));
      this.users = this.users.filter(x => x.bio?.includes(this.query) || x.name?.includes(this.query) || x.surname?.includes(this.query) || x.email?.includes(this.query));
    }
    this.orgs = this.entities.filter(x => x.type == EntityType.ORGANISATION);
    this.events = this.entities.filter(x => x.type == EntityType.EVENT);
    this.initiatives = this.entities.filter(x => x.type == EntityType.INITIATIVE);
    console.log(this.orgs.length, this.users.length, this.events.length, this.initiatives.length);
  }

}
