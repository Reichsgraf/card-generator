import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CardForm} from "../_interfaces/card-form";

@Component({
  selector: 'app-card-shirt',
  templateUrl: './card-shirt.component.html',
  styleUrls: ['./card-shirt.component.scss']
})
export class CardShirtComponent {

  @Input() formatControl!: FormControl<string>;
  @Input() cardForm!: FormGroup<CardForm>;

}
