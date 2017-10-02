import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { LoginComponent } from './components/login/login.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
