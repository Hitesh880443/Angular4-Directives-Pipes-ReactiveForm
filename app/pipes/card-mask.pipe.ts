import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';
@Pipe({
  name: 'cardMask'
})
export class CardMaskPipe implements PipeTransform {

  transform(value: any, visibleDigits: any): any {
    if(!visibleDigits)
    {
      visibleDigits = 5;
    }
    let maskedSection = value.slice(0, -visibleDigits);
    let visibleSection = value.slice(-visibleDigits);
    return maskedSection.replace(/./g, '*') + visibleSection;
  }

}
