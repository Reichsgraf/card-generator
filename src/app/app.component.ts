import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as htmlToImage from 'html-to-image';
import { TranslateService } from '@ngx-translate/core';
import { CardForm } from './_interfaces/card-form';
import { TextButtonComponent } from './text-button/text-button.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardShirtComponent } from './card-shirt/card-shirt.component';
import { CardSettingsComponent } from './card-settings/card-settings.component';
import { ResponsiveService } from './_modules/responsive/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CardSettingsComponent,
    CardShirtComponent,
    CardContentComponent,
    TextButtonComponent,
  ],
})
export class AppComponent {
  responsiveService = inject(ResponsiveService);
  translateService = inject(TranslateService);

  @ViewChild('card') card!: ElementRef;
  @ViewChild('shirt') shirt!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  formatControl: FormControl<string>;
  cardForm: FormGroup<CardForm>;

  constructor() {
    this.responsiveService.checkResponsiveFormat('DESKTOP');
    this.translateService.use(this.translateService.defaultLang);

    this.formatControl = new FormControl<string>('63,5 x 88', {
      nonNullable: true,
    });

    this.cardForm = new FormGroup<CardForm>({
      header: new FormControl<string>('', { nonNullable: true }),
      mainFaction: new FormControl<string>('N', { nonNullable: true }),
      secondFaction: new FormControl<string>('', { nonNullable: true }),
      frame: new FormControl<string>('bronze', { nonNullable: true }),
      rarity: new FormControl<string>('common', { nonNullable: true }),

      image: new FormControl<any>(null),
      power: new FormControl<string>('1', { nonNullable: true }),
      armor: new FormControl<string>('', { nonNullable: true }),
      provision: new FormControl<string>('6', { nonNullable: true }),
      fontSize: new FormControl<number>(16, { nonNullable: true }),
      cardback: new FormControl<string>('', { nonNullable: true }),
      type: new FormControl<string>('unit', { nonNullable: true }),

      name: new FormControl<string>('Card Name', { nonNullable: true }),
      categories: new FormControl<string>('Human', { nonNullable: true }),
      showStats: new FormControl<boolean>(false, { nonNullable: true }),
      STR: new FormControl<number>(10, { nonNullable: true }),
      DEX: new FormControl<number>(10, { nonNullable: true }),
      CON: new FormControl<number>(10, { nonNullable: true }),
      INT: new FormControl<number>(10, { nonNullable: true }),
      WIS: new FormControl<number>(10, { nonNullable: true }),
      CHA: new FormControl<number>(10, { nonNullable: true }),
      description: new FormControl<string>(
        '<p class="ql-align-justify ql-indent-1"><strong>Stat:</strong> Dexterity</p><p class="ql-align-justify">Additional text.</p>',
        { nonNullable: true },
      ),
      keywords: new FormControl<string>(
        '<p class="ql-align-center"><strong>Keyword1</strong>, <strong>Keyword2</strong></p>',
        { nonNullable: true },
      ),
      flavourText: new FormControl<string>(
        '<p><i>Up for a round of Gwent?</i></p>',
        { nonNullable: true },
      ),
    });
  }

  download(elementName: string) {
    const nativeElement = this.getNativeElement(elementName);

    htmlToImage
      .toPng(nativeElement)
      .then((canvas) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas;
        downloadLink.download = `${this.cardForm.value.name || 'card'}.png`;
        downloadLink.click();
        downloadLink.remove();
      })
      .catch();
  }

  getNativeElement(elementName: string) {
    if (elementName === 'card') {
      return this.card.nativeElement;
    }
    if (elementName === 'shirt') {
      return this.shirt.nativeElement;
    }
    if (elementName === 'content') {
      return this.content.nativeElement;
    }
  }

  downloadJSON() {
    const sJson = JSON.stringify(this.cardForm.value);
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson),
    );
    element.setAttribute(
      'download',
      `${this.cardForm.get('name')?.value}.json`,
    );
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  uploadJSON(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, 'UTF-8');
    fileReader.onload = () => {
      this.cardForm.patchValue(JSON.parse(fileReader.result as string));
    };
    /*fileReader.onerror = (error) => {
      console.log(error);
    }*/
  }
}
