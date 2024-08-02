import {FormControl} from "@angular/forms";

export interface CardForm {
  header: FormControl<string>;
  mainFaction: FormControl<string>;
  secondFaction: FormControl<string>;
  frame: FormControl<string>;
  rarity: FormControl<string>;

  image: FormControl<any>;
  power: FormControl<string>;
  armor: FormControl<string>;
  provision: FormControl<string>;
  fontSize: FormControl<number>;
  cardback: FormControl<string>;
  type: FormControl<string>;

  name: FormControl<string>;
  categories: FormControl<string>;
  showStats: FormControl<boolean>;
  STR: FormControl<number>;
  DEX: FormControl<number>;
  CON: FormControl<number>;
  INT: FormControl<number>;
  WIS: FormControl<number>;
  CHA: FormControl<number>;
  description: FormControl<string>;
  keywords: FormControl<string>;
  flavourText: FormControl<string>;
}
