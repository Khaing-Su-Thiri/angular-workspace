import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  @Output() formCanceled = new EventEmitter<number>();
  @Output() formSaved = new EventEmitter<Note>();
  @Input() noteData : Note = {id : 0, title : "", body : "", isEdit : false};

  note : Note = {id : 0, title : "", body : "", isEdit : false};

  cancelNote() {
    this.formCanceled.emit(this.noteData.id);
  }

  addNote() {
    this.formSaved.emit(this.note);
  }

  ngOnInit(): void {
    this.note = {...this.noteData};
  }
}
