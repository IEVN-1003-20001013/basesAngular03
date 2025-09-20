import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes';

@Pipe({
  name: 'heroeFilter',
  standalone: false
})
export class HeroeFilterPipe implements PipeTransform {

  transform(value: IHeroes[], arg: string): IHeroes[] {
    let filter: string = arg ? arg.toLocaleLowerCase() : '';

    return filter
      ? value.filter((heroe: IHeroes) =>
          heroe.nombre.toLocaleLowerCase().indexOf(filter) !== -1
        )
      : value;
  }

}

