import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardSettingsComponent } from './card-settings/card-settings.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TextButtonComponent } from './text-button/text-button.component';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { CardContentComponent } from './card-content/card-content.component';
import { CardShirtComponent } from './card-shirt/card-shirt.component';
import { GetRarityImagePipe } from './_pipes/get-rarity-image.pipe';
import { GetFrameImagePipe } from './_pipes/get-frame-image.pipe';
import { GetBannerImagePipe } from './_pipes/get-banner-image.pipe';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { GetFactionHeaderPipe } from './_pipes/get-faction-header.pipe';
import { GetSubFactionHeaderPipe } from './_pipes/get-sub-faction-header.pipe';
import { GetProvisionBannerImagePipe } from './_pipes/get-provision-banner-image.pipe';
import { GetProvisionFontSizePipe } from './_pipes/get-provision-font-size.pipe';
import {ResponsiveModule} from "./_modules/responsive/responsive.module";
import {ResponsiveService} from "./_modules/responsive/responsive.service";
import { GetTypeImagePipe } from './_pipes/get-type-image.pipe';
import { GetCardbackImagePipe } from './_pipes/get-cardback-image.pipe';
import {QuillConfigModule, QuillModule} from "ngx-quill";
import {NgxTranslateModule} from "./_modules/translate/translate.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {QuillEditorToolbar} from "./_utility/quill-rich-text-editor";
import {GetFormControlPipe} from "./_pipes/get-form-control.pipe";
import {TextEditorComponent} from "./text-editor/text-editor.component";
import {GetCardHeightPipe} from "./_pipes/get-card-height.pipe";
import {GetHeaderPipe} from "./_pipes/get-header.pipe";
import {GetContentBackgroundPipe} from "./_pipes/get-content-background.pipe";
import {GetFooterBackgroundPipe} from "./_pipes/get-footer-background.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CardSettingsComponent,
    IconButtonComponent,
    TextButtonComponent,
    CardContentComponent,
    CardShirtComponent,
    GetRarityImagePipe,
    GetFrameImagePipe,
    GetBannerImagePipe,
    GetFactionHeaderPipe,
    GetSubFactionHeaderPipe,
    GetProvisionBannerImagePipe,
    GetProvisionFontSizePipe,
    GetTypeImagePipe,
    GetCardbackImagePipe,
    GetCardHeightPipe,
    GetHeaderPipe,
    GetContentBackgroundPipe,
    GetFooterBackgroundPipe
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    NgxTranslateModule,
    ReactiveFormsModule,
    ClipboardModule,
    ResponsiveModule,
    QuillModule.forRoot(),
    QuillConfigModule.forRoot({
      modules: {
        syntax: false,
        toolbar: {
          container: QuillEditorToolbar,
        }
      },
    }),
    MatTooltipModule,
    GetFormControlPipe,
    TextEditorComponent
  ],
  exports: [],
  providers: [
    ResponsiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
