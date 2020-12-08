import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByCustomer',
    pure: false
})

export class FilterByCustomerPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => (null!=item && undefined!=item &&
            null!=item.customer && undefined!=item.customer && item.customer.indexOf(args[0]) !== -1));
    }
}