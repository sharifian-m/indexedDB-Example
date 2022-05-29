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
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDI3NmViM2MtODczMi00NGFhLTk1MDgtOTgxNGI3NjI0Mzc4IiwiaWF0IjoxNjUzODAyMDQwLjg4NDU4NCwibmJmIjoxNjUzODAyMDQwLjg4NDU5MywiZXhwIjoxNjUzODA1NjQwLjg2OTI4NTEsInN1YiI6IjI0NzAiLCJzY29wZXMiOlsieHNlcnYiXX0.zWcfze2gJtnNl8KY5zjashgdxFc3H8f1KyabBRLiIMI0vZb36K9lO1olE4LXectw2z4pziAptyViqxTBB1jerNh23W-HH4lzgDodzhpppH5h9u6AJyzcxv3dYBtPlUIWduZXu5cWoM8zxte1IdwA78_oLlVulfY13gMt19AO0FKEk6fP9JTHGyzm11BQ4tZ5Wkn_W5fKGqfhk-TNPovX8d12R7cdHzdCvrSBiKS5WAuNjBtx3RDyC26klhQvBDtghQrRmMWkPYoktL-fdjv7MMXt7VTbp_xXSZ6Ik8TSR6DwDRKhl_onTybPLB7BcINcYsG17s-BLJUCKm2xt5_3Cg'
  
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(req);
  }
}
