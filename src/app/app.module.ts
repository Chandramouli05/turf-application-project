import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './components/booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutConfirmDialogComponent } from './components/logout-confirm-dialog/logout-confirm-dialog.component';
import { BookHistoryComponent } from './components/book-history/book-history.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
    BookingComponent,
    SignupComponent,
    LogoutConfirmDialogComponent,
    BookHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
