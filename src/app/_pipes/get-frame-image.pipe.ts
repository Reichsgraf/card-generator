import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFrameImage'
})
export class GetFrameImagePipe implements PipeTransform {

  transform(frameName: string): string {
    return `assets/images/shirt_${frameName}.png`;
  }

}
