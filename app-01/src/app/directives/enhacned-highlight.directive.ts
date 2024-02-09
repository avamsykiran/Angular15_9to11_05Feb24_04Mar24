import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEnhancedHighlight]'
})
export class EnhancedHighlightDirective {

  @Input()
  appEnhancedHighlight:string;

  @Input()
  alternateColor:string;

  constructor(private ele: ElementRef) {
    this.appEnhancedHighlight="yellow"
    this.alternateColor="red";
    this.ele.nativeElement.style.backgroundColor = this.appEnhancedHighlight;
  }

  @HostListener("mouseover")
  mouseOverHandler(){
    this.ele.nativeElement.style.backgroundColor = this.alternateColor;
  }
  
  @HostListener("mouseleave")
  mouseLeaveHandler(){
    this.ele.nativeElement.style.backgroundColor = this.appEnhancedHighlight;
  }
}
