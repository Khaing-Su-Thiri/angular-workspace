import { Flashcard } from "src/app/flashcard.model";

export class FlashcardSet {

  constructor(
    public id : number,
    public name : string,
    public description : string,
    public flashcards : Array<Flashcard>,
    public isEditMode : boolean
  ) {}

  isNew() {
    return this.id === 0;
  }
}
