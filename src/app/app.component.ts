import { Component } from '@angular/core';
import { BookingService } from './Shared/booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indexedDB-example';

  trips!: any;
  upcomingTrips!: any;
  pastTrips!: any;

  constructor(
    private bookingService: BookingService,
   
              ) { }
  getAllTrips() {
    this.bookingService.getAllUpcomingTrips().subscribe(
      ((res: any) =>{
        this.trips = res;
        this.upcomingTrips = res;
      })
    );

    console.log( this.upcomingTrips);
    
  }

}
