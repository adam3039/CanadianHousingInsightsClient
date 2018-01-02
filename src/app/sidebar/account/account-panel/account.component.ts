import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { UserInfo } from '../../../models/user/user-info';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

    articleTitle = 'Article Title';
    comment = 'Comment';
    userInfo: UserInfo;
    loading = false;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getUserInformation().subscribe(userInfo => {
            this.userInfo = userInfo;
            this.loading = false;
        });
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/news']);
    }

    goToRecentNews() {
        this.router.navigateByUrl('/news');
    }

    changePassword() {
        this.router.navigate([{ outlets: { modal: 'changePassword' } }]);
    }
}
