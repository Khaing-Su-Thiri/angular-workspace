import { EventEmitter, Injectable } from '@angular/core';
import { Flashcard } from './flashcard.model';
import { FlashcardSet } from './flashcardset.model';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsetService {

  private flashcardSets : Array<FlashcardSet> = [];

  flashcardSetsChanged = new EventEmitter<Array<FlashcardSet>>();

  currentFlashcardSet : FlashcardSet = new FlashcardSet(0, "", "", [], false);

  currentFlashcardSetChanged = new EventEmitter<FlashcardSet>();

  playmodeChanged = new EventEmitter<boolean>();

  constructor() { }

  addSet(flashcardset : FlashcardSet) {
    if(this.flashcardSets.length <= 0)
      flashcardset.id = 1;
    else
      flashcardset.id = this.flashcardSets[this.flashcardSets.length-1].id + 1;
    this.flashcardSets.push(flashcardset);
    this.flashcardSetsChanged.emit(this.getSets());
  }

  getSets() {
    return [...this.flashcardSets];
  }

  updateSet(flashcardSet : FlashcardSet) {
    this.flashcardSets = this.getSets().map(data => {
      if(data.id === flashcardSet.id) {
          data.name = flashcardSet.name;
          data.description = flashcardSet.description;
      }
      return data;
    })
  }

  addCurrentFlashcardSet(flashcardSet : FlashcardSet) {
    this.currentFlashcardSet = flashcardSet;
    this.currentFlashcardSetChanged.emit(this.currentFlashcardSet);
  }

  getCurrentFlashcardSet() {
    return this.currentFlashcardSet;
  }

  addFlashCardToSet(flashcard : Flashcard) {
    if(this.getCurrentFlashcardSet().flashcards.length <= 0)
      flashcard.id = 1;
    else
      flashcard.id = this.getCurrentFlashcardSet().flashcards[this.getCurrentFlashcardSet().flashcards.length-1].id + 1;
    this.getCurrentFlashcardSet().flashcards.push(flashcard);
  }

  updateFlashCardToSet(flashcard : Flashcard) {
    this.getCurrentFlashcardSet().flashcards.map((data) => {
      if(data.id === flashcard.id) {
        data.term = flashcard.term;
        data.definition = flashcard.definition;
      }
      return data;
    })
  }

  changePlaymode(status : boolean) {
    this.playmodeChanged.emit(status);
  }
}
