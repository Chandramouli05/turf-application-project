import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   {

 userId!:number;
 username:string = '';
 phone:string = '';
 DateOfBirth:string = '';
 mail:string = '';
 password:string = '';
 confirm_password:string = '';
 role:string="client";
 
   constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { }

 
   signup(){

      const register = {
        username: this.username,
        phone:this.phone,
        DateOfBirth: this.DateOfBirth,
        mail:this.mail,
        password:this.password,
        role:this.role,
      };

      if(!this.username.trim() || !this.phone.trim() || !this.DateOfBirth.trim() || !this.password.trim() || !this.confirm_password.trim()){
        this.snackBar.open('Please enter the details correctly', 'Close'),{
          duration: 3000,
          panelClass: ['snackbar-success'],
          verticalPosition: 'top',             
          horizontalPosition: 'center',
        };
        return;
      }

      if(this.password !== this.confirm_password){
        this.snackBar.open("Password doesn't match, Re-enter again ", 'Close'),{
          duration: 3000,
          panelClass: ['snackbar-error'],
          verticalPosition: 'top',             
          horizontalPosition: 'center',
        };
        return;
      }

      this.http.post('http://localhost:3200/users',register).subscribe(()=>{
        this.snackBar.open("User Registered Successfully ", 'OK'),{
          duration: 3000,
          panelClass: ['snackbar-success'],
        
        };
        this.router.navigate(['/']);
        return;
      })

     
    
     
    //  this.auth.login(this.name, this.password).subscribe((res: any)=>{
    //     if(res.length){
    //      this.auth.setUser(res[0]);
    //      res[0].role === 'admin' ? this.router.navigate(['/admin']): this.router.navigate(['/client']);
    //     } else{
    //      //alert('Invalid credentials');
    //      this.snackBar.open('Invalid Credentials', 'Close'),{
    //        duration: 3000,
    //        panelClass: ['snackbar-error'],
    //        verticalPosition: 'top',             
    //        horizontalPosition: 'center',
          
   
    //      };
       
    //     }
    //  });
   }
}
