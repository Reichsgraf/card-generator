import {Component, Input} from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    standalone: true,
    imports: [NgClass, NgOptimizedImage]
})
export class IconButtonComponent {

  @Input() item!: { name: string, icon: string };
  @Input() isActive: boolean = false;
  @Input() imageWidth: number = 40;
  @Input() imageHeight: number = 40;

}
