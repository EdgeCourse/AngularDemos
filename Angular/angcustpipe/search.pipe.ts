import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
    args = args.toLowerCase();

return value.filter((data: any) => JSON.stringify(data).toLowerCase().includes(args));
  }

}