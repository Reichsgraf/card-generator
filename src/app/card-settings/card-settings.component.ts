import {Component, Input} from '@angular/core';
import {factionList} from "../_static/faction-list";
import {FormGroup} from "@angular/forms";
import {ListItem} from "../_interfaces/list-item";
import {frameList} from "../_static/frame-list";
import {rarityList} from "../_static/rarity-list";

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

  setFormField(fieldName: string, newValue: string | ArrayBuffer | null) {
    this.cardForm.get(fieldName)?.setValue(newValue);
  }

  uploadCardShirt(event: any) {
    const reader = new FileReader();
    if (event.target.files?.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result)
        this.setFormField('image', reader.result);
      };
    }
  }

}
