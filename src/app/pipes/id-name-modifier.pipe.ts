import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idNameModifier'
})
export class IdNameModifierPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
      return value.replaceAll(" ", "_").replaceAll("(","").replaceAll(")","").toLowerCase()
  }

}
