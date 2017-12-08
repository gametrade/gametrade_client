import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/user/login/login.component';
import { SignUpComponent } from '../components/user/sign-up/sign-up.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { MyGamesComponent } from '../components/games/my-games.component';
import { GameDetailsComponent } from '../components/games/game-details/game-details.component';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { CategoryComponent } from '../components/category/category.component';
import { NewGameComponent } from '../components/games/new-game/new-game.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    {
        path: '', component: LayoutComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'my-games', component: MyGamesComponent },
            { path: 'new-game', component: NewGameComponent },
            { path: 'games/:id', component: GameDetailsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'category/:id', component: CategoryComponent },
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
