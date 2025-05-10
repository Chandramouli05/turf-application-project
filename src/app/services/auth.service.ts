import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3200/users';
  currentUser: any;

  private currentUserSubject = new BehaviorSubject<any>(this.getUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http:HttpClient, private router:Router) {}
      login(username:string, password:string){
      
        return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`);
      }
      

      setUser(user:any){
        this.currentUser = user;
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSubject.next(user);
      }

      getUser(){
        return JSON.parse(localStorage.getItem('user')!);
      }

      logout(){
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
      }
   
}
