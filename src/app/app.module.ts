import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Md2Module } from "md2";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from "@angular/http";

import { Angular2TokenService } from "angular2-token";

// Material import
import { MATERIAL_MODULES } from "./shared/material/material";

// Services
import { SERVICES } from "./services/services";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MostSearchedGamesComponent } from './components/most-searched-games/most-searched-games.component';
import { GtFooterComponent } from './components/gt-footer/gt-footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppRoutingModule } from "./app.routing";
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, MostSearchedGamesComponent, GtFooterComponent, NotFoundComponent, HomeComponent],
    imports: [
        BrowserModule,
        CommonModule,
        Md2Module,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        HttpModule,
        MATERIAL_MODULES
    ],
    entryComponents: [LoginComponent],
    providers: [SERVICES, Angular2TokenService],
    bootstrap: [AppComponent]
})
export class AppModule { }