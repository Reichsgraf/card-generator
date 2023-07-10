import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formBuilder = inject(FormBuilder);

  cardForm: FormGroup;

  constructor() {
    this.cardForm = this.formBuilder.group({
      mainFaction: ['n'],
      secondFaction: [''],
      frame: ['bronze'],
      rarity: ['common'],
      name: ['Card Name'],
      categories: ['Human'],
      description: ['<b>Stat:</b> Dexterity'],
      keywords: ['<center><b>Keyword1</b>, <b>Keyword2</b></center>'],
      flavourText: ['<i>Up for a round of Gwent?</i>']
    });
    // TODO: empty symbol (ㅤ)
  }

}
