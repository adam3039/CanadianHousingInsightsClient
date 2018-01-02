import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    userService: UserService;
    constructor(private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.userService = this.injector.get(UserService);
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.userService.getToken()}`
            }
        });
        return next.handle(request);
    }
}
