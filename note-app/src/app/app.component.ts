import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'note-app';

  notes : Note[] = [];

  openForm() {
    let id = this.notes.length + 1;
    let note : Note = {id : id, title : "", body : "", isEdit : true};
    this.notes.unshift(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  onFormCanceled(id : number) {

    let note : Note = this.notes.find((data) => {
      return data.id == id;
    })!;

    if(!(note.title && note.body)) {
      this.onFormDeleted(id);
      return;
    }

    note.isEdit = false;
    this.notes = this.notes.map((data) => {
      return data.id == note.id ? note : data;
    });

    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  onFormSaved(note : Note) {
    note.isEdit = false;
    this.notes = this.notes.map((data) => {
      return data.id == note.id ? note : data;
    });
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  onFormEdited(id : number) {
    this.notes = this.notes.map((data) => {
      return data.id == id ? {...data, isEdit : true} : data;
    });
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  onFormDeleted(id : number) {
    this.notes = this.notes.filter((data) => {
      return data.id != id;
    });
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  ngOnInit() {
    this.notes = JSON.parse(localStorage.getItem("notes") ?? "[]");
  }
}
