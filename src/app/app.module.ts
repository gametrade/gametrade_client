//#region Imports

//#region  Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

//#endregion

//#region Layout Modules
import { Md2DatepickerModule, MdNativeDateModule } from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angular2TokenService } from 'angular2-token';

//#endregion

//#region Style Modules
import { StarRatingModule } from 'angular-star-rating';

//#endregion

//#region Material import
import { MATERIAL_MODULES } from './shared/material/material';

//#endregion

//#region Services
import { SERVICES } from './services/services';

//#endregion

//#region Routes
import { AppRoutingModule } from './routes/app.routing';

//#endregion

//#region Pages Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MyGamesComponent } from './components/games/my-games.component';

//#endregion

//#region User Components
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

//#endregion

//#region Information Components
import { MostRecentGamesComponent } from './components/most-recent-games/most-recent-games.component';
import { RecommendedGamesComponent } from './components/recommended-games/recommended-games.component';

//#endregion

//#region Layout Components
import { LayoutComponent } from './components/layout/layout.component';
import { GametradeFooterComponent } from './components/gametrade-footer/gametrade-footer.component';

//#endregion

//#region Shared Components
import { CloseableComponent } from './shared/components/closeable/closeable.component';
import { GameCardComponent } from './shared/components/game-card/game-card.component';
import { SearchFieldComponent } from './shared/components/search-field/search-field.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { LoadingOverlayComponent } from './shared/components/loading-overlay/loading-overlay.component';
import { CustomImageComponent } from './shared/components/custom-image/custom-image.component';
import { CategoryCardComponent } from './shared/components/category-card/category-card.component';
import { CategoryListComponent } from './components/home/category-list/category-list.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CategoryComponent } from './components/category/category.component';
import { NewGameComponent } from './components/games/new-game/new-game.component';

//#endregion

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        SignUpComponent,
        HomeComponent,
        MyGamesComponent,
        NotFoundComponent,
        GametradeFooterComponent,
        MostRecentGamesComponent,
        RecommendedGamesComponent,
        CloseableComponent,
        GameCardComponent,
        SearchFieldComponent,
        GameDetailsComponent,
        LoadingOverlayComponent,
        CustomImageComponent,
        CategoryCardComponent,
        CategoryListComponent,
        ProfileComponent,
        ReservationComponent,
        CategoryComponent,
        NewGameComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        Md2DatepickerModule,
        MdNativeDateModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        StarRatingModule.forRoot(),
        MATERIAL_MODULES
    ],
    entryComponents: [LoginComponent],
    providers: [
        SERVICES,
        Angular2TokenService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
