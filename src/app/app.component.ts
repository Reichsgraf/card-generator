import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import * as htmlToImage from 'html-to-image';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  translateService = inject(TranslateService);
  formBuilder = inject(FormBuilder);

  @ViewChild('card') card!: ElementRef;
  @ViewChild('shirt') shirt!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  formatControl: FormControl;
  cardForm: FormGroup;

  constructor() {
    this.translateService.use(this.translateService.defaultLang);

    this.formatControl = this.formBuilder.control('63,5 x 88');

    this.cardForm = this.formBuilder.group({
      header: [''],
      mainFaction: ['N'],
      secondFaction: [''],
      frame: ['bronze'],
      rarity: ['common'],

      image: [null],
      power: ['1'],
      armor: [''],
      provision: ['6'],
      fontSize: [16],
      cardback: [''],
      type: ['unit'],

      name: ['Card Name'],
      categories: ['Human'],
      showStats: [false],
      STR: [10],
      DEX: [10],
      CON: [10],
      INT: [10],
      WIS: [10],
      CHA: [10],
      description: ['<p class="ql-align-justify ql-indent-1"><strong>Stat:</strong> Dexterity</p><p class="ql-align-justify">Additional text.</p>'],
      keywords: ['<p class="ql-align-center"><strong>Keyword1</strong>, <strong>Keyword2</strong></p>'],
      flavourText: ['<p><i>Up for a round of Gwent?</i></p>'],
    });
  }

  download(elementName: string) {
    let nativeElement;
    nativeElement = this.getNativeElement(elementName);

    htmlToImage.toPng(nativeElement)
      .then(canvas => {
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas;
        downloadLink.download = `${this.cardForm.get('name')?.value || 'card'}.png`;
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

}
