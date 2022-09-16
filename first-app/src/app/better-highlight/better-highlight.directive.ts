import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input("appBetterHighlight") defaultBgColor : string = "transparent";

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.defaultBgColor);
  }

}
