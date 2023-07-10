import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardSettingsComponent } from './card-settings/card-settings.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TextButtonComponent } from './text-button/text-button.component';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSettingsComponent,
    IconButtonComponent,
    TextButtonComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
