import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearTitle'
})
export class ClearTitlePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    return value.trim()
      .replace(/[^a-z\d\s]+/gi, '')
      .toLowerCase()
      .replace(/^([a-z])|\s+([a-z])/g, ($1) => {
        return $1.toUpperCase();
      });
  }

}
