import { Pipe, PipeTransform } from '@angular/core';
import {headerList} from "../_static/header-list";

@Pipe({
    name: 'getHeader',
    standalone: true,
})
export class GetHeaderPipe implements PipeTransform {

  transform(header: string = ''): string {
    return headerList.find(existedHeader => existedHeader.name === header)?.icon || '';
  }

}
