import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.component.html',
  styleUrls: ['./book-history.component.css']
})
export class BookHistoryComponent implements OnInit {

  books:any[] = [];


  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.http.get<[any]>('http://localhost:3200/bookhistory').subscribe(data =>{
      this.books = data;
      console.log(this.books);
    });
  }

}
