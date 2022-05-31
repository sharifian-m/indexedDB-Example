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
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjgxNThjODQtNjZmMC00MDA5LTk4ODItY2JmOTZiZTQ3YjVlIiwiaWF0IjoxNjUzOTM4NjQyLjA2OTM1NiwibmJmIjoxNjUzOTM4NjQyLjA2OTM2NiwiZXhwIjoxNjUzOTQyMjQyLjAyMzcxMSwic3ViIjoiMjQ3MCIsInNjb3BlcyI6WyJ4c2VydiJdfQ.rtva4NTIe5a6a-H7z9CenenOLdp-V6h7HrpJL8kLYaIsHvIHe__Q10__RB-aEMAUunnfzgobIPRleUwbt24JJywaid2wRgACaY3_xm21OSDLSB71KQ0ULa6ua7EfeUlatqUo2yULsY1HtAxyWn6bzCILeYefvwxYFEZYDWtF49_xxyhQrjF8smMO8xHB7-sjw71HmNdhJkB1E_NqD77bi-3i_pV9Sd4-HmeLWlvCkx2R_WCgg7b3UsuOH5NDzFvW9QQiDNXa-5l_sO3l2Boqpjhcu31k1gxuLcJ6N0yott9SGu8rZIPSgBi01TR0RFbezibJ79nLnJwbsrOBplFklg'
  
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(req);
  }
}
