import { Pipe, PipeTransform } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Pipe({
  name: 'getFormControl',
  standalone: true
})
export class GetFormControlPipe implements PipeTransform {

  transform(group: FormGroup, controlName: string): FormControl {
    return group.get(controlName) as FormControl;
  }

}
