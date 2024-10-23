import {Component, Input} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-text-button',
    templateUrl: './text-button.component.html',
    styleUrls: ['./text-button.component.scss'],
    standalone: true,
    imports: [NgClass, TranslateModule]
})
export class TextButtonComponent {

  @Input() text: string = '';
  @Input() width: string = 'fit-content';
  @Input() isActive: boolean = false;

}
