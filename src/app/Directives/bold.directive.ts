import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  @Input() appBold = '#0ff';

  constructor(private el: ElementRef) {}

   ngOnInit(): void{
    this.el.nativeElement.style.color = this.appBold;
   }

}
