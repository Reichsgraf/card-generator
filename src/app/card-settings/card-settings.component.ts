import {Component, Input} from '@angular/core';
import {factionList} from "../_static/faction-list";
import {FormGroup} from "@angular/forms";
import {ListItem} from "../_interfaces/list-item";
import {frameList} from "../_static/frame-list";
import {rarityList} from "../_static/rarity-list";
import {typeList} from "../_static/type-list";
import {cardbackList} from "../_static/cardback-list";

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.scss']
})
export class CardSettingsComponent {

  @Input() cardForm!: FormGroup;

  factionList = factionList;
  frameList = frameList;
  rarityList = rarityList;
  typeList = typeList;
  cardbackList = cardbackList;

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
    this.cardForm.get('categories')?.setValue('1 уровень')
    this.cardForm.get('description')?.setValue(
      'ㅤ<b>Время накладвания:</b> 1 действие.\n' +
      'ㅤ<b>Дистанция:</b> 30 футов.\n' +
      'ㅤ<b>Компоненты:</b> В, С, М (капля святой воды).\n' +
      'ㅤ<b>Длительность:</b> концентрация (до 1 минуты).\n' +
      'ㅤВы благословляете до трёх существ на свой выбор в пределах дистанции. До окончания заклинания цель, совершая бросок атаки или спасбросок, может добавить d4 к результату броска.\n' +
      'ㅤ<b>На высоких уровнях:</b> одно дополнительное целевое существо за каждый уровень ячейки выше первого.'
    );
    this.cardForm.get('keywords')?.setValue('<center><b>Школа Очарования</b></center>');
    this.cardForm.get('flavourText')?.setValue('');
  }

  setCharacterTemplate() {
    this.cardForm.get('fontSize')?.setValue(14);

    this.cardForm.get('type')?.setValue('unit');
    this.cardForm.get('power')?.setValue(4);
    this.cardForm.get('armor')?.setValue(10);
    this.cardForm.get('provision')?.setValue(0);

    this.cardForm.get('name')?.setValue('Обыватель');
    this.cardForm.get('categories')?.setValue('Средний гуманоид')
    this.cardForm.get('description')?.setValue(
      '<table>' +
      '<tr><th><b>СИЛ</b></th><th><b>ЛОВ</th><th><b>ТЕЛ</b></th><th><b>ИНТ</b></th><th><b>МДР</b></th><th><b>ХАР</b></th></tr>' +
      '<tr><td>10 (+0)</td><td>10 (+0)</td><td>10 (+0)</td><td>10 (+0)</td><td>10 (+0)</td><td>10 (+0)</td></tr>' +
      '</table>\n' +
      'ㅤ<b>Скорость:</b> 30 футов.\n' +
      'ㅤ<b>Чувства:</b> Внимательность (10).\n' +
      'ㅤ<b>Языки:</b> 1 любой (Общий).\n' +
      'ㅤ<b>Опасность:</b> 0 (10 опыта).\n\n' +
      '<b>Действия</b>\n' +
      'ㅤ<b>Удар дубиной:</b> рукопашная атака оружием, +2 к попаданию, досягаемость 5 футов, 1 цель, урон: 1d4 дробящий.'
    );
    this.cardForm.get('keywords')?.setValue('');
    this.cardForm.get('flavourText')?.setValue('');

  }

}
