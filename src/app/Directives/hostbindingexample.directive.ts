import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostbindingexample]',
})
export class HostbindingexampleDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostBinding('style.backgroundColor') background1: string = 'blue';
  @HostBinding('style.transition') trans: string = '0.5s';
  @HostBinding('style.margin') margin: string = '10px 20px';

  @HostListener('mouseenter') mouseenter11() {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'Red');
    this.render.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
