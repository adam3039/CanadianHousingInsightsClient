// app-modal.component.ts
import { Component, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { UserService } from '../../services/user.service';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './auth-modal.component.html',
    styleUrls: ['./auth-modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
    private returnUrl: string;
    public display = true;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

    menuItems: MenuItem[];

    ngOnInit() {
        this.userService.loggedInObservable.subscribe(value => {
            this.onLoginSuccess();
        });

        this.menuItems = [
            { label: 'Login', routerLink: ['login'] },
            { label: 'Register', routerLink: ['register'] }
        ];
    }

    onHide() {
        this.display = false;
        this.router.navigate([{ outlets: { modal: null } }]);
    }

    onLoginSuccess() {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            this.returnUrl = queryParams['returnUrl'];
        });
        this.router.navigate([{ outlets: { modal: null, primary: [this.returnUrl] } }]);
    }
}
