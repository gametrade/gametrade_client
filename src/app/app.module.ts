import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';

// Material import
import { MATERIAL_MODULES } from "./shared/material/material";

// Services
import {SERVICES} from "./services/services";

// Components
import {AppComponent} from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        MATERIAL_MODULES
    ],
    providers: [SERVICES],
    bootstrap: [AppComponent]
})
export class AppModule {}