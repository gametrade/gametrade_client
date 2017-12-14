//#region Imports

// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { Angular2TokenService } from 'angular2-token';

// Components
import { LoginComponent } from '../components/user/login/login.component';
import { SignUpComponent } from '../components/user/sign-up/sign-up.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { MyGamesComponent } from '../components/games/my-games/my-games.component';
import { GameDetailsComponent } from '../components/games/game-details/game-details.component';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { ThemeComponent } from '../components/theme/theme.component';
import { NewGameComponent } from '../components/games/new-game/new-game.component';
import { CurrentUserResolverService } from '../services/current-user-resolver/current-user-resolver.service';
import { GamesComponent } from '../components/games/games.component';
import { FindComponent } from '../components/user/find/find.component';

//#endregion

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    {
        path: '', component: LayoutComponent, resolve: { currentUser: CurrentUserResolverService }, children: [
            { path: 'home', component: HomeComponent },
            { path: 'my-games', component: MyGamesComponent, canActivate: [Angular2TokenService] },
            { path: 'new-game', component: NewGameComponent, canActivate: [Angular2TokenService] },
            { path: 'profile', component: ProfileComponent, canActivate: [Angular2TokenService] },
            { path: 'profile/:id', component: FindComponent },
            { path: 'games/:id', component: GameDetailsComponent },
            { path: 'games', component: GamesComponent },
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
