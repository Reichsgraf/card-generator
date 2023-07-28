import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-shirt',
  templateUrl: './card-shirt.component.html',
  styleUrls: ['./card-shirt.component.scss']
})
export class CardShirtComponent {

  @Input() cardForm!: FormGroup;

}
