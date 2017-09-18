import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; 
import { Md2Module } from "md2";
import { FlexLayoutModule } from '@angular/flex-layout';
// import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Md2Module,
    FlexLayoutModule
  ],
  declarations: []
})
export class SharedModule { }
