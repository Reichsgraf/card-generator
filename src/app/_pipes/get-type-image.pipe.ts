import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getTypeImage',
    standalone: true
})
export class GetTypeImagePipe implements PipeTransform {

  transform(typeName: string = ''): string {
    return `assets/images/${typeName}.png`;
  }

}
