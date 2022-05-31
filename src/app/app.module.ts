import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptor copy';
import { DataService } from './data.service';


const dbConfig: DBConfig  = {
  name: 'MyDatabase1',
  version: 1,
  objectStoresMeta: [{
    store: 'MyStore1',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'country', keypath: 'country', options: { unique: false } },
      { name: 'imgUrl', keypath: 'imgUrl', options: { unique: false } },
      { name: 'fromDate', keypath: 'fromDate', options: { unique: false } },
      { name: 'toDate', keypath: 'toDate', options: { unique: false } },
    ]},
  // },
  {
    store: 'MyStore2',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'country', keypath: 'country', options: { unique: false } },
      { name: 'imgUrl', keypath: 'imgUrl', options: { unique: false } },
      { name: 'fromDate', keypath: 'fromDate', options: { unique: false } },
      { name: 'toDate', keypath: 'toDate', options: { unique: false } },
    ]
  }
]
};

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
   
    NgxIndexedDBModule.forRoot(dbConfig)
   
  ],
  providers: [[ DataService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
