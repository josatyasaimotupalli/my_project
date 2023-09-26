import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',

})
export class FilterPipe implements PipeTransform {

  transform(value:Array<any> , ...args: unknown[]): Array<any> {
    const searchItem= args[0]

    return searchItem ? value.filter(user =>(user === searchItem) ): value;
  }

}
