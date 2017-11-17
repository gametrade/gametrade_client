import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/user/login/login.component';
import { SignUpComponent } from '../components/user/sign-up/sign-up.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { GamesComponent } from '../components/games/games.component';
import { GameDetailsComponent } from '../components/games/game-details/game-details.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    {
        path: '', component: LayoutComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'games', component: GamesComponent },
            { path: 'games/:id', component: GameDetailsComponent },
            { path: '', pathMatch: 'full', redirectTo: '/home' }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
