import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {


  constructor(public el: ElementRef, public rend: Renderer) {

  }

  @Input() check: boolean;

  ngOnInit() {
    if (this.check === true) {
      this.rend.setElementStyle(this.el.nativeElement, 'display', 'none');
    }

  }

  @HostListener('mouseover') onMouseEnter() {
    this.rend.setElementStyle(this.el.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
         this.rend.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
    }

  
   
  

}
