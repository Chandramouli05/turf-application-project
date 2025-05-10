import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  turfId!:number;
  username:string ='';
  phone:string='';
  sport: string = '';
  total:string = '';
  contact: string='';
  turfname:string='';
  date:string='';
  time:string='';
  price:number= 0;
  user: any;
  role:string ='client';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,private auth: AuthService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();

    this.username = this.user?.username || '';
    this.turfname = this.route.snapshot.paramMap.get('turfName')!;
  }

  bookTurf(){
    const booking = {
      username: this.username,
      contact: this.contact,
      total:this.total,
      sport: this.sport,
      turfname:this.turfname,
      date: this.date,
      turfId : this.turfId,
      time:this.time,
      price:this.price,
      role: this.role
    };
 

    if( !this.contact.trim() || !this.total.trim() || !this.sport.trim() || !this.date.trim()  ||  !this.time.trim()){
      this.snackBar.open('Please enter the details correctly', 'Close'),{
        duration: 3000,
        panelClass: ['snackbar-success'],
        verticalPosition: 'top',             
        horizontalPosition: 'center',
      };
      return;
    }
   
    this.http.post('http://localhost:3200/bookings',booking).subscribe(()=>{


      this.snackBar.open('Turf Booked Successfully', 'Close'),{
        duration: 3000,
        panelClass: ['snackbar-success'],
        verticalPosition: 'top',             
        horizontalPosition: 'center',
         
  

      };
      
      this.router.navigate(['/client']);
      
    });

    console.log(booking.sport);

 
  }

  onSportChange(){
    switch(this.sport.toLowerCase()){
      case 'cricket': 
       this.price = 1500;
       break;

      case 'badmiton':
        this.price = 200;
        break;
      
      case 'football':
        this.price = 250;
        break;

      default:
        this.price = 0;
      
    }
  }


}
