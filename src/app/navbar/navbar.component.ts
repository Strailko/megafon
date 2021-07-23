import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginComponent } from '../dialogs/login/login.component';
import { RegisterComponent } from '../dialogs/register/register.component';
import { SearchboxComponent } from '../dialogs/searchbox/searchbox.component';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/interfaces';
import { UserService } from '../shared/user.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  user: User = {
    id: 0
  };

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private authService: AuthService, private breakpointObserver: BreakpointObserver) { }

  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    this.breakpointObserver.observe([
      '(max-width: 768px)'
        ]).subscribe(result => {
          if (result.matches) {
            this.isSmallScreen = true;
          }
          else {
            this.isSmallScreen = false;
          }
        });
  }

  openLoginDialog():void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.openSnackBar("Успешна најава", "Одете до вашиот профил").onAction().subscribe(() => {
          this.router.navigate(['/userprofile', result.id]);
        });
      }
      else {
        this.openSnackBar("Неуспешна најава", "Обидете се повторно").onAction().subscribe(() => {
          this.openLoginDialog();
        });
      }
    });
  }

  openRegisterDialog():void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.openSnackBar("Успешна регистрација", "Најави се").onAction().subscribe(() => {
          this.openLoginDialog();
        });
      }
      else {
        this.openSnackBar("Неуспешна регистрација", "Обидете се повторно").onAction().subscribe(() => {
          this.openRegisterDialog();
        });
      }
    });
  }

  openSearchBoxDialog():void {
    let dialogRef = this.dialog.open(SearchboxComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(["/search/" + result]);
      }
    });
  }


  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
