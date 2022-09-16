import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input("appUnless") set unless( condition : boolean ) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private tempRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

  // ngOnChanges() {
  //   if(!this.unless) {
  //     this.vcRef.createEmbeddedView(this.tempRef);
  //   } else {
  //     this.vcRef.clear();
  //   }
  // }

}
