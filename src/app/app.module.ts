import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialImports } from './app-materials.module';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        materialImports
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
