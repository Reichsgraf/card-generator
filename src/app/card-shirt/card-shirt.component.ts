import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardForm } from '../_interfaces/card-form';
import { GetCardHeightPipe } from '../_pipes/get-card-height.pipe';
import { GetCardbackImagePipe } from '../_pipes/get-cardback-image.pipe';
import { GetTypeImagePipe } from '../_pipes/get-type-image.pipe';
import { GetProvisionFontSizePipe } from '../_pipes/get-provision-font-size.pipe';
import { GetProvisionBannerImagePipe } from '../_pipes/get-provision-banner-image.pipe';
import { GetBannerImagePipe } from '../_pipes/get-banner-image.pipe';
import { GetFrameImagePipe } from '../_pipes/get-frame-image.pipe';
import { GetRarityImagePipe } from '../_pipes/get-rarity-image.pipe';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-shirt',
  templateUrl: './card-shirt.component.html',
  styleUrls: ['./card-shirt.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    GetRarityImagePipe,
    GetFrameImagePipe,
    GetBannerImagePipe,
    GetProvisionBannerImagePipe,
    GetProvisionFontSizePipe,
    GetTypeImagePipe,
    GetCardbackImagePipe,
    GetCardHeightPipe,
  ],
})
export class CardShirtComponent {
  @Input() formatControl!: FormControl<string>;
  @Input() cardForm!: FormGroup<CardForm>;
}
