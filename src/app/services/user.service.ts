import { Injectable, Inject } from '@angular/core';
import { ConfigService } from '../utils/config.service';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/user/user-info';
import { LoginResponse } from '../models/auth/login-response';
import { UserRegistration } from '../models/auth/user-registration';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends BaseService {

    private loggedIn = false;
    public loggedInObservable = new Subject<boolean>();
    public passwordChangeObservable = new Subject<boolean>();

    constructor(private http: HttpClient, private configService: ConfigService, @Inject('BASE_URL') private baseUrl: string) {
        super();
        this.loggedIn = this.determineIfLoggedIn();
    }

    register(email: string, password: string, userName: string, confirmPassword: string): Observable<UserRegistration> {
        return this.http.post(this.baseUrl + 'api/account/register', { email, password, userName, confirmPassword })
            .map(res => true)
            .catch(this.handleError);
    }

    login(userName, password) {
        return this.http.post<LoginResponse>(this.baseUrl + 'api/account/login', { userName, password })
            .map(res => res)
            .map(res => {
                localStorage.setItem('auth_token', res.auth_token);
                localStorage.setItem('token_valid_for', String(res.expires_in));
                localStorage.setItem('token_issued_at', res.issued_at);
                return true;
            })
            .catch(this.handleError);
    }

    changePassword(currentPassword, newPassword) {
        const response = this.http.post(this.baseUrl + 'api/account/changepassword', { currentPassword, newPassword });
        return response;
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token_valid_for');
        localStorage.removeItem('token_issued_at');
    }

    isLoggedIn() {
        return this.determineIfLoggedIn();
    }

    loginSucceeded(loggedIn: boolean) {
        this.loggedInObservable.next(loggedIn);
    }

    changePasswordSucceeded(passwordChanged: boolean) {
        this.passwordChangeObservable.next(passwordChanged);
    }

    getToken(): string | null {
        return localStorage.getItem('auth_token');
    }

    determineIfLoggedIn(): boolean {
        if (!!localStorage.getItem('auth_token')) {
            const issuedAt = localStorage.getItem('token_issued_at');
            const validFor = localStorage.getItem('token_valid_for');
            if ( issuedAt != null && validFor != null) {
                const issuedAtDate = new Date(issuedAt);
                const validForSeconds = +validFor;
                issuedAtDate.setSeconds(issuedAtDate.getSeconds() + validForSeconds);
                const expiry = issuedAtDate;
                const now = new Date();
                if (now < expiry) {
                    return true;
                }
            }
        }
        return false;
    }

    getUserInformation(): Observable<UserInfo> {
        return this.http.get<UserInfo>(this.baseUrl + 'api/account/getuserinformation');
    }
}
