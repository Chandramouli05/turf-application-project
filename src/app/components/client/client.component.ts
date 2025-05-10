import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  turfs:any[]= [];
  currentUser:any;
 


  constructor(private http: HttpClient, private router: Router, private auth: AuthService){}

  ngOnInit() {
    this.currentUser = this.auth.getUser();
    this.http.get<any[]>('http://localhost:3200/turfs').subscribe(data =>{
      this.turfs = data;
      
    });

  
  }

  slotSelection(){
    this.router.navigate(['/booking']);
  }

}
