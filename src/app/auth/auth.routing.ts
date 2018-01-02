import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModalComponent } from '../auth/auth-modal/auth-modal.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'auth', component: ModalComponent, outlet: 'modal',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full'},
            { path: 'register', component: RegistrationFormComponent },
            { path: 'login', component: LoginFormComponent }
        ]
    }
]);
