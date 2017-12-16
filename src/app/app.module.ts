//#region Imports

//#region  Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';


//#endregion

//#region Layout Modules
import { FlexLayoutModule } from '@angular/flex-layout';

//#endregion

//#region Style Modules
import { StarRatingModule } from 'angular-star-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//#endregion

//#region Services
import { SERVICES } from './services/services';
import { Angular2TokenService } from 'angular2-token';

//#endregion

//#region Routes
import { AppRoutingModule } from './routes/app.routing';

//#endregion

//#region Pages Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MyGamesComponent } from './components/games/my-games/my-games.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ThemeComponent } from './components/theme/theme.component';
import { NewGameComponent } from './components/games/new-game/new-game.component';
import { ReservationComponent } from './components/reservation/reservation.component';

//#endregion

//#region User Components
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

//#endregion

//#region Information Components
import { MostRecentGamesComponent } from './components/most-recent-games/most-recent-games.component';
import { ThemeListComponent } from './components/home/theme-list/theme-list.component';

//#endregion

//#region Layout Components
import { LayoutComponent } from './components/layout/layout.component';
import { GametradeFooterComponent } from './components/gametrade-footer/gametrade-footer.component';

//#endregion

//#region Shared Components and Material
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material';
import { MATERIAL_MODULES } from './shared/material/shared-material';
import { SHARED_COMPONENTS } from './shared/components/shared-components';
import { GamesComponent } from './components/games/games.component';
import { FindComponent } from './components/user/find/find.component';
import { ConfirmReservationComponent } from './components/reservation/confirm-reservation/confirm-reservation.component';
import { NearbyComponent } from './components/games/nearby/nearby.component';
import { SuccessComponent } from './components/reservation/success/success.component';

//#endregion

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
        GameDetailsComponent,
        ThemeListComponent,
        ProfileComponent,
        ReservationComponent,
        ThemeComponent,
        NewGameComponent,
        SHARED_COMPONENTS,
        GamesComponent,
        FindComponent,
        ConfirmReservationComponent,
        NearbyComponent,
        SuccessComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MATERIAL_MODULES,
        MatNativeDateModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        TextMaskModule,
        StarRatingModule.forRoot(),
        ModalGalleryModule.forRoot(),
        InfiniteScrollModule
    ],
    entryComponents: [LoginComponent],
    providers: [
        SERVICES,
        Angular2TokenService,
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: LOCALE_ID, useValue: 'pt' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
