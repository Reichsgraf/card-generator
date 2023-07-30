import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formBuilder = inject(FormBuilder);

  @ViewChild('card') card!: ElementRef;
  @ViewChild('shirt') shirt!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  cardForm: FormGroup;

  constructor() {
    this.cardForm = this.formBuilder.group({
      mainFaction: ['N'],
      secondFaction: [''],
      frame: ['bronze'],
      rarity: ['common'],

      image: [null],
      power: ['1'],
      armor: [''],
      provision: ['6'],
      fontSize: [16],

      name: ['Card Name'],
      categories: ['Human'],
      description: ['ㅤ<b>Stat:</b> Dexterity\n' +
      'Additional text.'],
      keywords: ['<center><b>Keyword1</b>, <b>Keyword2</b></center>'],
      flavourText: ['<i>Up for a round of Gwent?</i>']
    });

    // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
