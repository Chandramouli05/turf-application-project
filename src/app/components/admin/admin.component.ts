import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  users: any[] = [];
  turfs: any[] = [];
  profit: number = 0;
  displayedColumns: string[] = ['username', 'contact', 'turfname', 'sport', 'time', 'date', 'total', 'price'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3200/users').subscribe(data => this.users = data);
    this.http.get<any[]>('http://localhost:3200/turfs').subscribe(data => this.turfs = data);
    this.http.get<any[]>('http://localhost:3200/bookings').subscribe(data => {
      this.dataSource.data = data;
      this.profit = data.length * 11750;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
