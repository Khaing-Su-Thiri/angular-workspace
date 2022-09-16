import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appServerStatus]'
})
export class ServerStatusDirective implements OnInit {

  @Input("appServerStatus") status : string = "hello";

  constructor(private eleRef : ElementRef, private render : Renderer2) { }

  @HostListener("mouseenter") enter() {
    this.render.setStyle(this.eleRef.nativeElement, "font-size", "5em");
  }

  @HostListener("mouseleave") leave() {
    this.render.setStyle(this.eleRef.nativeElement, "font-size", "1em");
  }

  ngOnInit() {
    if(this.status == "online")
      this.render.setStyle(this.eleRef.nativeElement, "color", "green");
    else
      this.render.setStyle(this.eleRef.nativeElement, "color", "red");
  }
}
