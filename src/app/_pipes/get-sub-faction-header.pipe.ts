import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getSubFactionHeader',
    standalone: true
})
export class GetSubFactionHeaderPipe implements PipeTransform {

  transform(factionName: string = ''): string {
    return `assets/images/${factionName}_small_half.png`;
  }

}
