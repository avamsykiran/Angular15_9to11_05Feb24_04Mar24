import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'empToString'
})
export class EmpToStringPipe implements PipeTransform {

  transform(e: Employee): string {
    return `${e.fullName} is our employee baring ${e.id} 
    as employee id and draws ${e.basicPay} rupees each month`; 
  }

}
