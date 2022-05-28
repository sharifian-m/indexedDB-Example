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
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTJiNzc3MmMtM2JhZi00ODA0LWE0MmYtYjkzNjNhOGJhOTA1IiwiaWF0IjoxNjUzNzY5NzQ1LjE0ODQ5MDksIm5iZiI6MTY1Mzc2OTc0NS4xNDg1LCJleHAiOjE2NTM3NzMzNDUuMTMwMjU4MSwic3ViIjoiMjQ3MCIsInNjb3BlcyI6WyJ4c2VydiJdfQ.tzGOMpebTA40TFPDHyr711jPhbqY5bav8nA3HjTk9zQA_QpkrtQktx7KO05-c18ee_v_w-ZzB9riiyUJudOy6OkT9UZ7HRTfKzb8hgj1w-VgxiZp6p54EJhcFqB99NldPP5aWQBULTKU3BfWwKdGqEotFJ-rrSd2wnLrHZ8Fue95L3-6C7eiHX9wFprSfzF16w9WqTfwesQkFWxgUzVFYxNwBpnBstuvP2z4T5Dauz9_iyuR9K_L7RI3kDIqEwfhqA70eTA_58Da7ynGWHly2nEUU7h6jeXBrmptggm3fZcwVRX1T0VeghqxYx1K-OTYFACkgFAyDc1Pdva4clgDrg'
  
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(req);
  }
}
