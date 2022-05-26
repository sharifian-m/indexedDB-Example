import { Component, OnInit } from '@angular/core';
// import { BookingService } from './Shared/booking.service';
import { openDB } from 'idb';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'indexedDB-example';
  upcomingTrips="aaaaa"
  trips!: any;
  // upcomingTrips!: any;
  pastTrips!: any;
  text:string ="aaa"
  constructor(
    // private bookingService: BookingService,
   
              ) { }

           
ngOnInit(): void {
  // demo1() {
    openDB('db1', 1, {
      upgrade(db) {
        db.createObjectStore('store1');
        db.createObjectStore('store2');
      },
    });
}

 async demo2() {
  const db1 = await openDB('db1', 1);
  db1.add('store1', 'aaaa', 'aaaa');
  db1.add('store1', "bbb", 'bbbbb');
  db1.close();
}
// demo1: Getting started
 
  // openDB('db2', 1, {
  //   upgrade(db) {
  //     db.createObjectStore('store3', { keyPath: 'id' });
  //     db.createObjectStore('store4', { autoIncrement: true });
  //   },
  // });
// }
  // getAllTrips() {
  //   this.bookingService.getAllUpcomingTrips().subscribe(
  //     ((res: any) =>{
  //       this.trips = res;
  //       this.upcomingTrips = res;
  //     })
  //   );

  //   console.log( this.upcomingTrips);
    
  // }

}
