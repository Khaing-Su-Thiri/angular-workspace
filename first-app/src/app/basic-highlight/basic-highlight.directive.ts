import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector : '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {

  @HostBinding('style.color') color = "";

  constructor(private elRef : ElementRef) {
  }

  @HostListener('click') onClick() {
    this.elRef.nativeElement.style.backgroundColor = "black";
    this.elRef.nativeElement.style.color = "white";
  }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = "pink";
    this.color = "black";
  }
}
