import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.jeton.pipe(
      take(1),
      exhaustMap(jeton =>{
        if(jeton==null){
          return next.handle(request);
        }
        request = request.clone({ headers: request.headers.set('Authorization',String( jeton.jwt)) });
        console.log(request);
        return next.handle(request);
      })
    )
  }
}
