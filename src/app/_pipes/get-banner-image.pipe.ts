import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBannerImage'
})
export class GetBannerImagePipe implements PipeTransform {

  transform(factionName: string): string {
    return `assets/images/${factionName}_banner.png`;
  }

}
