import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  num:number;
  str:string;
  today:Date;
  emp:Employee;

  constructor(){
    this.num=12.3456;
    this.str="Hai all! Hope everything is good!";
    this.today=new Date();
    this.emp = {id:101,fullName:"Vamsy",basicPay:90000};
  }

}
