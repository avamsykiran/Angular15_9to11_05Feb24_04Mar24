import { Component, Input } from '@angular/core';
import { Link } from '../models/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  title:string;

  @Input()
  links!:Link[];

  constructor(){
    this.title="Budget Tracker";
  }

}
