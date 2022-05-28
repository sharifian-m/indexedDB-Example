import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from './data.service';
import { trips } from './model/item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'indexedDB-example';
  // upcomingTripsindexeddb:trips[]=[];
  allTrips:trips[]=[];
  allTripsIndexedDB:trips[]=[];
  // upcomingTrips = [
  //   {
  //     id:0,
  //     name: 'GAAFU-ALIF-ATOLL',
  //     country: 'MALEDIVEN',
  //     imgUrl: './assets/images/hotel1.png',
  //     fromDate: '20.10.2022',
  //     toDate: '27.10.2022'
  //   },
  //   {
  //     id:1,
  //     name: 'Koh Kong Province',
  //     country: 'Cambodia',
  //     imgUrl: './assets/images/hotels/hotel-3.jpg',
  //     fromDate: '28.12.2022',
  //     toDate: '12.01.2023'
  //   },
  //   {
  //     id:2,
  //     name: 'Gili Air',
  //     country: 'Indonesia',
  //     imgUrl: './assets/images/hotels/hotel-1.jpg',
  //     fromDate: '01.07.2022',
  //     toDate: '07.07.2022'
  //   }

  // ];
 
  constructor(
    private dbService: NgxIndexedDBService,
    private dataService:DataService

  ) {
    // this.show();
  }

  ngOnInit() {
    this.getAllTrips();
  }
  getAllTrips() {
    this.dataService.getAllUpcomingTrips().subscribe(
      ((res: any) =>{
      this.allTrips=res;
        console.log('data is', res);
      })
    ); }

    add() {
      for(let i=0; i<=this.allTrips.length;i++){
    
        this.dbService
          .add('MyStore1', 
          this.allTrips[i])
          .subscribe((key) => console.log( 'key:', key));
        }
          // this.show();
      }
  show() {
    this.dbService.getAll<any>('MyStore1').subscribe(
      (x) => {
        this.allTripsIndexedDB = x;
        console.log('upcomingTripsindexeddb', this.allTrips);
      },
      (error) => {
        console.log(error);
      }
    );
  }

 bulkadd() {
    this.dbService
      .bulkAdd('MyStore1', 
      [this.allTrips])
      .subscribe((key) => console.log( 'key:', key));
  }

  clear() {
    this.dbService.clear('MyStore1').subscribe(x=> console.log(x));
  }

  deleteDataBase(){
    this.dbService.deleteDatabase().subscribe(x=> console.log('the database delete:',x));
  }

 getDataBaseName(){
  this.dbService.getAllByIndex('MyStore1', 'id', IDBKeyRange.only("d0169fc6-e69f-4dd9-b6e6-ee03c9a5d232"))
  .subscribe((kpis) => {
    console.log('getDataBase',kpis);
  })
}
 }
 

