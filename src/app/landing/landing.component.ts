import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Entity, EntityType } from '../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  initiatives: Entity[] = [];
  events: Entity[] = [];
  organisations: Entity[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.initiatives = this.dataService.getEntities().filter(x => x.type == EntityType.INITIATIVE).slice(0, 3);
    this.events = this.dataService.getEntities().filter(x => x.type == EntityType.EVENT).slice(0, 3);
    this.organisations = this.dataService.getEntities().filter(x => x.type == EntityType.ORGANISATION).slice(0, 3);
  }

}
