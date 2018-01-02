import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../services/user.service';
import { routing } from './auth.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModalComponent } from './auth-modal/auth-modal.component';
import { SpinnerComponent } from '../sidebar/spinner/spinner.component';
import { InlineSVGModule } from 'ng-inline-svg/lib';
import { DialogModule, TabMenuModule, MenuItem } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        InlineSVGModule,
        DialogModule,
        TabMenuModule,
        HttpClientModule
    ],
    declarations: [
        RegistrationFormComponent,
        LoginFormComponent,
        ModalComponent,
        SpinnerComponent
    ],
    providers: [UserService]
})
export class AuthModule { }
