import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFrameImage'
})
export class GetFrameImagePipe implements PipeTransform {

  transform(frameName: string, isContent: boolean): string {
    return `assets/images/${isContent ? 'content' : 'shirt'}_${frameName}.png`;
  }

}
