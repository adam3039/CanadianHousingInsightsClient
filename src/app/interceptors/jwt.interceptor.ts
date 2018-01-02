import 'rxjs/add/operator/do';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpEvent, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    userService: UserService;
    constructor(private injector: Injector, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.userService = this.injector.get(UserService);
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.router.navigate([{ outlets: { modal: 'auth' } }]);
                }
            }
        });
    }
}
