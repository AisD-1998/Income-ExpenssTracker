import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthName',
  standalone: true,
})
export class MonthNamePipe implements PipeTransform {
  transform(monthIndex: number): string {
    if (monthIndex < 0 || monthIndex > 11) return 'Invalid Month';

    var monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
    ];

    return monthNames[monthIndex];
  }
}
