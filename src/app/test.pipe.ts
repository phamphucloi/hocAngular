import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log('value', value);

    if(value==true){
      return 'delicours';
    }

    return 'so-Terible';
  }

}
