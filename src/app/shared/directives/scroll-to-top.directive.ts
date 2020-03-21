import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]',
})
export class ScrollToTopDirective {

  constructor(private elementView: ElementRef) { 
   
  }

  @HostListener("click") onclick() {
    console.log('aekzaoekoaz');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // For Chrome, Firefox, IE and Opera
  }

}
