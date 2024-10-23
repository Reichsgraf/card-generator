import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getFactionHeader',
    standalone: true
})
export class GetFactionHeaderPipe implements PipeTransform {

  transform(factionName: string = ''): string {
    return `assets/images/${factionName}_small_full.png`;
  }

}
