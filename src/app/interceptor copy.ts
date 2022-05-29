import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import {DomainName} from './PathTools';
// import {CookieService} from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmU1MDdkMTgtNzk5NS00YmIxLTk2MGItNTU3Yjk0MTA4Zjk1IiwiaWF0IjoxNjUzODA1ODc4LjUyMjAyMiwibmJmIjoxNjUzODA1ODc4LjUyMjAzMTEsImV4cCI6MTY1MzgwOTQ3OC41MDc5ODYxLCJzdWIiOiIyNDcwIiwic2NvcGVzIjpbInhzZXJ2Il19.yrNL61jJVldIB41l31yl5MklcjkfoYCryeIwAvgRaF4iQNqPWxlmEZV414bOvKSvgTkffHstxyxgQkbJmWVjmcgmxcVrHRtDrW4NEl-fJ0pWXjQ0Qi8eTkV7oWkuu7T4HwhG0DFQHwnZp_GypaUC-eV8C6xgkkdSgewCLMPIDAcqi_j_iirlac9Tjt9uLbaVxjvj8dsRjeBx0YYhpCf0_xIb1HNTeqId5AbxK98SIMAo8blDOAnoMisyk8XXqN6VDTgHe7mtVBybOyx1T_TGiK3TVRkNHZ4Rqqa2_AvYSiYBTmZj2pf2WEvz7oOS8ON6fV72aSR7EhOTdNs7sTSqng'
  
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(req);
  }
}
