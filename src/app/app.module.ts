//#region Imports
// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Md2DatepickerModule, MdNativeDateModule } from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

// Material import
import { MATERIAL_MODULES } from './shared/material/material';

// Services
import { SERVICES } from './services/services';

// Routes
import { AppRoutingModule } from './routes/app.routing';

// Pages Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';

// Information Components
import { MostSearchedGamesComponent } from './components/most-searched-games/most-searched-games.component';
import { RecommendedGamesComponent } from './components/recommended-games/recommended-games.component';

// Layout Components
import { LayoutComponent } from './components/layout/layout.component';
import { GametradeFooterComponent } from './components/gametrade-footer/gametrade-footer.component';

// Shared Components
import { CloseableComponent } from './shared/components/closeable/closeable.component';
import { GameCardComponent } from './shared/components/game-card/game-card.component';

//#endregion

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        HomeComponent,
        GamesComponent,
        NotFoundComponent,
        GametradeFooterComponent,
        MostSearchedGamesComponent,
        RecommendedGamesComponent,
        CloseableComponent,
        GameCardComponent
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