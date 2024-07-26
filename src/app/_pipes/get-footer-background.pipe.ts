import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFooterBackground'
})
export class GetFooterBackgroundPipe implements PipeTransform {

  transform(format: string): string {
    return format === '70 x 120'
      ? `url(assets/images/bg_footer_small_white.png)`
      : `url(assets/images/bg_footer_small.png)`;
  }

}
