import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
const Moment = moment;

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, format: any, eraType: string = 'BE'): any {

    if (!Moment(value, format).isValid()) {
      return '';
    }

    if (eraType === 'BE') {
      return Moment(value, format).add(543, 'years').format(format);
    } else {
      return Moment(value, format).add(-543, 'years').format(format);
    }

  }

}
