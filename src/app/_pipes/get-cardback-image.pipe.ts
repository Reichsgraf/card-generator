import { Pipe, PipeTransform } from '@angular/core';
import {cardbackList} from "../_static/cardback-list";

@Pipe({
  name: 'getCardbackImage'
})
export class GetCardbackImagePipe implements PipeTransform {

  transform(cardbackName: string): string {
    return cardbackList.find(item => item.name === cardbackName)?.icon || '';
  }

}
