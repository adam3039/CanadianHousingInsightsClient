import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Routes } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Credentials } from '../../models/auth/credentials';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent {
    @Output() loggedIn = new EventEmitter<any>();

    errors: string;
    isRequesting: boolean;
    submitted = false;
    credentials: Credentials = { username: '', password: '' };
    constructor(private modalService: ModalService,
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    login({ value, valid }: { value: Credentials, valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.username, value.password)
                .finally(() => this.isRequesting = false)
                .subscribe(
                result => {
                    if (result) {
                        this.userService.loginSucceeded(true);
                    }
                },
                error => this.errors = error);
        }
    }
}
