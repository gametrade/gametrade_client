import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Md2Module } from "md2";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from "@angular/http";
import { Angular2TokenService } from "angular2-token";

// Material import
import { MATERIAL_MODULES } from "./shared/material/material";

// Services
import { SERVICES } from "./services/services";

// Routes
import { AppRoutingModule } from "./routes/app.routing";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MostSearchedGamesComponent } from './components/most-searched-games/most-searched-games.component';
import { GamesComponent } from './components/games/games.component';

import { GametradeFooterComponent } from './components/gametrade-footer/gametrade-footer.component';
import { CloseableComponent } from './components/closeable/closeable.component';
import { NoConflictStyleCompatibilityMode } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MostSearchedGamesComponent,
        GametradeFooterComponent,
        NotFoundComponent,
        HomeComponent,
        GamesComponent,
        LayoutComponent,
        CloseableComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        // Md2Module,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        HttpModule,
        ReactiveFormsModule,
        MATERIAL_MODULES,
        NoConflictStyleCompatibilityMode
    ],
    entryComponents: [LoginComponent],
    providers: [
        SERVICES,
        Angular2TokenService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }