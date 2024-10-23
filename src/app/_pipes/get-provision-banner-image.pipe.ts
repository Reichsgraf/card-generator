import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getProvisionBannerImage',
    standalone: true
})
export class GetProvisionBannerImagePipe implements PipeTransform {

  transform(factionName: string = ''): string {
    return `assets/images/${factionName}_provision.png`;
  }

}
