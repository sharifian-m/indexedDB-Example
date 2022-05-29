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

  allTrips:trips[]=[];
  allTripsIndexedDB:trips[]=[];
  editTrip:trips={
    id:'20',
    codeDestination: '3423',
    region: 'wser',
    name: 'er',
    country: 'g',
    imgUrl: 'string',
    fromDate: 'string',
    toDate: 'string',
    bookingDate: 'string'
  }
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
  delete(){
    this.dbService.deleteByKey('MyStore1','d0169fc6-e69f-4dd9-b6e6-ee03c9a5d232').subscribe(x=>console.log('delete is',x));
    
  }
  addNewItem(){
    this.dbService.update('MyStore1', this.editTrip).subscribe(x=>console.log('edit',x)
    );
  }
 getDataBaseName(){
  this.dbService.getAllByIndex('MyStore1', 'id', IDBKeyRange.only('d0169fc6-e69f-4dd9-b6e6)-ee03c9a5d232'))
  .subscribe((x) => {
    console.log('getDataBase',x);
  })
}
 }
 

