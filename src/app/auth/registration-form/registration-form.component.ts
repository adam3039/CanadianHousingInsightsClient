import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserRegistration } from '../../models/auth/user-registration';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent {

    errors: string;
    isRequesting: boolean;
    submitted = false;
    visible = false;

    constructor(private modalService: ModalService, private userService: UserService, private router: Router) {
     }

    registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.username, value.confirmPassword)
                .finally(() => this.isRequesting = false)
                .subscribe(
                registerResult => {
                    if (registerResult) {
                        this.userService.login(value.username, value.password)
                            .subscribe(
                            loginResult => {
                                if (loginResult) {
                                    this.userService.loginSucceeded(true);
                                }
                            },
                            error => this.errors = error);
                    }
                },
                errors => this.errors = errors);
        }
    }
}
