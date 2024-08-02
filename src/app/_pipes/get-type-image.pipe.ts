import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTypeImage'
})
export class GetTypeImagePipe implements PipeTransform {

  transform(typeName: string = ''): string {
    return `assets/images/${typeName}.png`;
  }

}
