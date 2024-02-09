import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimpleHighlight]'
})
export class SimpleHighlightDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener("mouseover")
  mouseOverHandler(){
    this.ele.nativeElement.style.backgroundColor = "red";
  }
  
  @HostListener("mouseleave")
  mouseLeaveHandler(){
    this.ele.nativeElement.style.backgroundColor = "yellow";
  }
}
