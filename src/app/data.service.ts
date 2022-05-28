
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUpcomingTrips(): Observable<any[]> {
    const upcomingTrips: any[] = [];
    const url = environment.trasoUrl + 'bookings/upcoming' ;
    return this.http.get<any>(url).pipe(map(
     res =>{
       res?.data.forEach((item: any) => {
         upcomingTrips.push(
           {
             id: item.id,
             codeDestination: item.destination.code,
             region: item.destination.region,
             name: item.meta.description,
             country: item.destination.country,
             imgUrl: './assets/images/hotels/hotel-1.jpg',
             fromDate: item.date.start,
             toDate: item.date.end,
             bookingDate: item.date.booking
           }
         )
       })

       return upcomingTrips
     }
    ));
  }
}
