import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { BookingComponent } from './components/booking/booking.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookHistoryComponent } from './components/book-history/book-history.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'client', component: ClientComponent},
  {path:'booking', component:BookingComponent},
  {path:'booking/:turfName', component: BookingComponent},
  {path:'signup', component: SignupComponent},
  {path:'bookhistory', component: BookHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
