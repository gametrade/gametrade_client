import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from "@angular/flex-layout";

// Material import
import { MATERIAL_MODULES } from "./shared/material/material";

// Services
import { SERVICES } from "./services/services";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule, SharedModule, MATERIAL_MODULES, FlexLayoutModule
    ],
    entryComponents: [LoginComponent],
    providers: [SERVICES],
    bootstrap: [AppComponent]
})
export class AppModule { }