import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProvisionFontSize',
  standalone: true,
})
export class GetProvisionFontSizePipe implements PipeTransform {
  transform(provisionValue: string): string {
    return provisionValue.length > 2 ? '50px' : '65px';
  }
}
