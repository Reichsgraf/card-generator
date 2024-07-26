import { Pipe, PipeTransform } from '@angular/core';
import {formatList} from "../_static/format-list";

@Pipe({
  name: 'getCardHeight'
})
export class GetCardHeightPipe implements PipeTransform {

  transform(targetFormat: string): string {
    return formatList.find(format => format.name === targetFormat)?.value || '';
  }

}
