import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html'
})
export class ServerComponent {
  showStatus : boolean = false;

  @Input() serverData : {name : string, status : string} = {name : '', status : ''};
  @Input() color : string = "";
  @Input() desc : string = "";
  @Input('abc') hello : string = "";

  @Output() statusChanged = new EventEmitter<string>();

  toggleStatus() {
    this.serverData.status = this.serverData.status === "online" ? "offline" : "online";

    this.statusChanged.emit(this.serverData.name + " changed to " + this.serverData.status);
  }
}
