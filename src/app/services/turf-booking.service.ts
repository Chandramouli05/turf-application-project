import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurfBookingService {
  baseUrl = 'http://localhost:3200';

  constructor(private http: HttpClient) { }

  getTurfs(){
    return this.http.get(`${this.baseUrl}/turfs`);
  }

  addTurf(turf:any){
    return this.http.post(`${this.baseUrl}/turfs`,turf);
  }

  bookTurf(data:any){
    return this.http.post(`${this.baseUrl}/bookings`,data);
  }

  getBookings(){
    return this.http.get(`${this.baseUrl}/bookings`);
  }

  logUserActivity(activity:any){
    return this.http.post(`${this.baseUrl}/userActivity`, activity);
  }

  getUserActivities(){
    return this.http.get(`${this.baseUrl}/userActivity`);
  }
}
