import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appServerTotal]'
})
export class ServerTotalDirective implements OnChanges {

  @Input("appServerTotal") show : boolean = false;

  constructor(private tempRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

  ngOnChanges() {
    if(this.show)
      this.vcRef.createEmbeddedView(this.tempRef);
     else
      this.vcRef.clear();
  }

}
