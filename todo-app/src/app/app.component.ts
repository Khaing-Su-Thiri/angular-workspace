import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos : Array<string> = [];

  untodos : Array<string> = [];

  input : string = "";

  addToTODOList() {
    this.todos.push(this.input);
    this.input = "";
  }

  checkAsDone(input : string) {
    this.untodos.push(input);
    this.todos = this.todos.filter((todo) => {
      return todo != input;
    });
  }

  checkAsUndo(input : string) {
    this.todos.push(input);
    this.untodos = this.untodos.filter((untodo) => {
      return untodo != input;
    });
  }
}
