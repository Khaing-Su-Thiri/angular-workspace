import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input() noteData : Note = {id : 0, title : "", body : "", isEdit : false};
  @Output() formEdited = new EventEmitter<number>();
  @Output() formDeleted = new EventEmitter<number>();

  editNote() {
    this.formEdited.emit(this.noteData.id);
  }

  deleteNote() {
    this.formDeleted.emit(this.noteData.id);
  }
}
