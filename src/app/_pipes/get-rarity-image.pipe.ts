import { Pipe, PipeTransform } from '@angular/core';
import {rarityList} from "../_static/rarity-list";

@Pipe({
  name: 'getRarityImage'
})
export class GetRarityImagePipe implements PipeTransform {

  transform(rarityValue: string = ''): string {
    return rarityList.find(item => item.name === rarityValue)?.icon || '';
  }

}
