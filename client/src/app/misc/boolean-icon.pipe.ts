import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booleaniconfilter' })
export class BooleanIconPipe implements PipeTransform {

    transform(value): string {
        return value ? 'check box' : '';
    }
}
