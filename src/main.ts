import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuillEditorToolbar } from './app/_utility/quill-rich-text-editor';
import { QuillModule, QuillConfigModule } from 'ngx-quill';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTranslateModule } from './app/_modules/translate/translate.module';
import { NgOptimizedImage } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ResponsiveService } from './app/_modules/responsive/responsive.service';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
          BrowserModule,
          NgOptimizedImage,
          NgxTranslateModule,
          ReactiveFormsModule,
          ClipboardModule,
          QuillModule.forRoot(),
          QuillConfigModule.forRoot({
            modules: {
                syntax: false,
                toolbar: {
                    container: QuillEditorToolbar,
                }
            },
          }),
          MatTooltipModule
        ),
        ResponsiveService
    ]
})
  .catch(err => console.error(err));
