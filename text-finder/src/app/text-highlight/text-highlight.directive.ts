import { HostBinding, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnChanges, OnInit {

  @Input() searchTerms : string = "";
  @Input() isCaseSensitive : boolean = false;
  @HostBinding('innerHTML') innerHTML = "";
  @Input("appTextHighlight") color : string = "transparent";

  constructor(private eleRef : ElementRef) { }

  ngOnChanges() {
    console.log("on changes");
    let text = this.eleRef.nativeElement.textContent;
    if(this.searchTerms != "") {
      console.log("in if ....");
      let regExp = new RegExp(this.searchTerms, this.isCaseSensitive ? 'g' : 'gi');
      text = text.replace(regExp, (result : string)=>{
        return "<mark class=" + this.color + ">" + result + "</mark>";
      });
    }
    this.innerHTML = text;
  }

  ngOnInit() {
    this.innerHTML = this.eleRef.nativeElement.innerHTML;
  }
}
