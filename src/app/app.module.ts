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
import { GamesComponent } from './components/games/games.component';

//#endregion

//#region User Components
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

//#endregion

//#region Information Components
import { MostAccessedGamesComponent } from './components/most-accessed-games/most-accessed-games.component';
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

//#endregion

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        SignUpComponent,
        HomeComponent,
        GamesComponent,
        NotFoundComponent,
        GametradeFooterComponent,
        MostAccessedGamesComponent,
        RecommendedGamesComponent,
        CloseableComponent,
        GameCardComponent,
        SearchFieldComponent,
        GameDetailsComponent,
        LoadingOverlayComponent,
        CustomImageComponent
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
