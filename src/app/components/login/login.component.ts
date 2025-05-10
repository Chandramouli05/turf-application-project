import { Component,inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 


   username = '';
   password = '';
  


  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  login(){
    if (!this.username.trim() || !this.password.trim()) {
      //alert('Please enter valid username and password');
      this.snackBar.open('Please enter valid username & password', 'Close'),{
        duration: 3000,
        panelClass: ['snackbar-success'],
        verticalPosition: 'top',             
        horizontalPosition: 'center',
         
  

      };
      return;
    }
    
    this.auth.login(this.username, this.password).subscribe((res: any)=>{
       if(res.length){
        this.auth.setUser(res[0]);
        res[0].role === 'admin' ? this.router.navigate(['/admin']): this.router.navigate(['/client']);
       } else{
        //alert('Invalid credentials');
        this.snackBar.open('Invalid Credentials', 'Close'),{
          duration: 3000,
          panelClass: ['snackbar-error'],
          verticalPosition: 'top',             
          horizontalPosition: 'center',
          color: 'primary'
  
        };
      
       }
    });
  }

  

  

}
