import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuillEditorToolbar } from './app/_utility/quill-rich-text-editor';
import { QuillModule, QuillConfigModule } from 'ngx-quill';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ResponsiveService } from './app/_modules/responsive/responsive.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      NgOptimizedImage,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
      ReactiveFormsModule,
      ClipboardModule,
      QuillModule.forRoot(),
      QuillConfigModule.forRoot({
        modules: {
          syntax: false,
          toolbar: {
            container: QuillEditorToolbar,
          },
        },
      }),
      MatTooltipModule,
    ),
    ResponsiveService,
  ],
}).catch((err) => console.error(err));
