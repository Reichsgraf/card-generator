import { Pipe, PipeTransform } from '@angular/core';
import {cardbackList, whCardbackList} from "../_static/cardback-list";

@Pipe({
  name: 'getCardbackImage'
})
export class GetCardbackImagePipe implements PipeTransform {

  transform(cardbackName: string): string {
    return [...cardbackList, ...whCardbackList].find(item => item.name === cardbackName)?.icon || '';
  }

}
