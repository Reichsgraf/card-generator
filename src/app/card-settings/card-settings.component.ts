import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {factionList} from "../_static/faction-list";
import {FormControl, FormGroup} from "@angular/forms";
import {ListItem} from "../_interfaces/list-item";
import {frameList} from "../_static/frame-list";
import {rarityList} from "../_static/rarity-list";
import {typeList} from "../_static/type-list";
import {cardbackList} from "../_static/cardback-list";
import {languageList} from "../_static/language-list";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSettingsComponent {

  translateService = inject(TranslateService);

  @Input() cardForm!: FormGroup;
  languageControl: FormControl = new FormControl('en');

  languageList = languageList;
  factionList = factionList;
  frameList = frameList;
  rarityList = rarityList;
  typeList = typeList;
  cardbackList = cardbackList;

  setLanguage(language: ListItem) {
    this.languageControl.setValue(language.name);
    this.translateService.use(language.name);
  }

  setMainFaction(faction: ListItem) {
    this.setFormField('mainFaction', faction.name);
  }

  setSecondFaction(faction: ListItem) {
    this.setFormField('secondFaction', faction.name);
  }

  setFrame(frame: ListItem) {
    this.setFormField('frame', frame.name);
  }

  setRarity(rarity: ListItem) {
    this.setFormField('rarity', rarity.name);
  }

  setType(type: ListItem) {
    this.setFormField('type', type.name);
  }

  setCardback(cardback: ListItem) {
    this.setFormField('cardback', cardback.name);
  }

  setFormField(fieldName: string, newValue: string | ArrayBuffer | null) {
    this.cardForm.get(fieldName)?.setValue(newValue);
  }

  uploadCardShirt(event: any) {
    const reader = new FileReader();
    if (event.target.files?.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setFormField('image', reader.result);
      };
    }
  }

  setSpellTemplate() {
    this.cardForm.get('fontSize')?.setValue(14);

    this.cardForm.get('name')?.setValue('Благословение');
    this.cardForm.get('categories')?.setValue('1 уровень');
    this.cardForm.get('showStats')?.setValue(false);
    this.cardForm.get('description')?.setValue(
      '<p class="ql-align-justify ql-indent-1"><strong>Время накладвания:</strong> 1 действие.</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Дистанция:</strong> 30 футов.</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Компоненты:</strong> В, С, М (капля святой воды).</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Длительность:</strong> концентрация (до 1 минуты).</p>' +
      '<p class="ql-align-justify ql-indent-1">Вы благословляете до трёх существ на свой выбор в пределах дистанции. До окончания заклинания цель, совершая бросок атаки или спасбросок, может добавить d4 к результату броска.</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>На высоких уровнях:</strong> одно дополнительное целевое существо за каждый уровень ячейки выше первого.</p>'
    );
    this.cardForm.get('keywords')?.setValue('<p class="ql-align-center"><strong>Школа Очарования</strong></p>');
    this.cardForm.get('flavourText')?.setValue('');
  }

  setCharacterTemplate() {
    this.cardForm.get('fontSize')?.setValue(14);

    this.cardForm.get('type')?.setValue('unit');
    this.cardForm.get('power')?.setValue(4);
    this.cardForm.get('armor')?.setValue(10);
    this.cardForm.get('provision')?.setValue(0);

    this.cardForm.get('name')?.setValue('Обыватель');
    this.cardForm.get('categories')?.setValue('Средний гуманоид');
    this.cardForm.get('showStats')?.setValue(true);
    this.cardForm.get('STR')?.setValue(10);
    this.cardForm.get('DEX')?.setValue(10);
    this.cardForm.get('CON')?.setValue(10);
    this.cardForm.get('INT')?.setValue(10);
    this.cardForm.get('WIS')?.setValue(10);
    this.cardForm.get('CHA')?.setValue(10);
    this.cardForm.get('description')?.setValue(
      '<p></p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Скорость:</strong> 30 футов.</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Чувства:</strong> Внимательность (10).</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Языки:</strong> 1 любой (Общий).</p>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Опасность:</strong> 0 (10 опыта).</p>' +
      '<p></p>' +
      '<strong><strong>Действия</strong></strong>' +
      '<p class="ql-align-justify ql-indent-1"><strong>Удар дубиной:</strong> рукопашная атака оружием, +2 к попаданию, досягаемость 5 футов, 1 цель, урон: 1d4 дробящий.'
    );
    this.cardForm.get('keywords')?.setValue('');
    this.cardForm.get('flavourText')?.setValue('');
  }

  toggleStat() {
    this.cardForm.get('showStats')?.setValue(!this.cardForm.get('showStats')?.value);
  }

}
