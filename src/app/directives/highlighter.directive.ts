import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor="Green"
   }

}
