import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getContentBackground',
    standalone: true
})
export class GetContentBackgroundPipe implements PipeTransform {

  transform(format: string): string {
    return format === '70 x 120'
      ? `url(assets/images/bg_card_description_white.png)`
      : `url(assets/images/bg_card_description.png)`;
  }

}
