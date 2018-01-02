import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private user: UserService, private router: Router, private currentActivatedRoute: ActivatedRoute) { }
    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot) {
        if (!this.user.isLoggedIn()) {
            const current = this.currentActivatedRoute;
            const path = activatedRouteSnapshot.url[0].path;
            this.router.navigate([{ outlets: { modal: 'auth' } }], { queryParams: { returnUrl: path } });
            return false;
        }
        return true;
    }
}
