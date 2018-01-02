import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ChangePasswordModel } from '../../models/auth/change-password';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-change-password-modal',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent implements OnInit {
    // @Output() passwordChanged = new EventEmitter<any>();

    returnUrl: string;
    display = true;
    errors: string;
    isRequesting: boolean;
    submitted = false;
    changePassword: ChangePasswordModel = {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    };

    constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.userService.passwordChangeObservable.subscribe(value => {
            this.onPasswordChangeSuccess();
        });
    }

    change({ value, valid }: { value: ChangePasswordModel, valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.changePassword(value.currentPassword, value.newPassword)
                .finally(() => this.isRequesting = false)
                .subscribe(
                () => {
                    this.userService.changePasswordSucceeded(true);
                },
                error => this.errors = error);
        }
    }

    onHide() {
        this.router.navigate([{ outlets: { modal: null } }]);
    }

    onPasswordChangeSuccess() {
        this.router.navigate([{ outlets: { modal: null } }]);
    }
}
