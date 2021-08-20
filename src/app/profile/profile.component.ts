import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { Entity, User } from '../shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Entity = {};
  user: User = {};
  isCreator: boolean = false;
  id = '';

  constructor(private route: ActivatedRoute, private dataService: DataService, private authService: AuthService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.profile = this.dataService.getEntities().filter(x => x.id == Number(this.id))[0];

    if(JSON.stringify(this.user) != '{}') {
      if(this.user.id == this.profile.creator?.id) {
        this.isCreator = true;
      }
    }
  }

  join() {
    console.log(this.authService.getLoggedInUser());
    if(JSON.stringify(this.authService.getLoggedInUser()) !== '{}') {
      this.dataService.join(this.user, this.profile);
      this.profile = this.dataService.getEntities().filter(x => x.id == Number(this.id))[0];
      this.openSnackBar("Успешно се приклучивте", "Во ред")
    }
    else {
      this.openSnackBar("Мора да бидете најавени за да се приклучите", "Во ред");
    }
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
