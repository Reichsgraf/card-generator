import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFrameImage',
  standalone: true,
})
export class GetFrameImagePipe implements PipeTransform {
  transform(frameName: string = '', isContent: boolean = false): string {
    return `assets/images/${isContent ? 'content' : 'shirt'}_${frameName}.png`;
  }
}
