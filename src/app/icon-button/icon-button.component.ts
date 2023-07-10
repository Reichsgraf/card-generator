import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  @Input() item!: { name: string, icon: string };
  @Input() isActive: boolean = false;
  @Input() imageSize: number = 40;

}
