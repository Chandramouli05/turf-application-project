import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LogoutConfirmDialogComponent } from './components/logout-confirm-dialog/logout-confirm-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turf-app';
  role: string = "";

  constructor(public auth: AuthService, private dialog: MatDialog, private router: Router) {
    // const user = this.auth.getUser();
    // this.role = user?.role || '';
    this.auth.currentUser$.subscribe(user => {
      this.role = user?.role || '';
    });
  }

  logout():void{

    const dialogRef = this.dialog.open(LogoutConfirmDialogComponent,{
      width:'30rem'
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.auth.logout();
        this.router.navigate(['/']);
      }
    });
  
  }
}
