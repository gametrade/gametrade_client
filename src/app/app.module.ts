//#region Imports
// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// Layout Modules
import { Md2DatepickerModule, MdNativeDateModule } from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angular2TokenService } from 'angular2-token';

// Style Modules
import { DragScrollModule } from 'angular2-drag-scroll';
import { StarRatingModule } from 'angular-star-rating';

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
import { MostAccessedGamesComponent } from './components/most-accessed-games/most-accessed-games.component';
import { RecommendedGamesComponent } from './components/recommended-games/recommended-games.component';

// Layout Components
import { LayoutComponent } from './components/layout/layout.component';
import { GametradeFooterComponent } from './components/gametrade-footer/gametrade-footer.component';

// Shared Components
import { CloseableComponent } from './shared/components/closeable/closeable.component';
import { GameCardComponent } from './shared/components/game-card/game-card.component';
import { SearchFieldComponent } from './shared/components/search-field/search-field.component';

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
        MostAccessedGamesComponent,
        RecommendedGamesComponent,
        CloseableComponent,
        GameCardComponent,
        SearchFieldComponent
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
        DragScrollModule,
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
