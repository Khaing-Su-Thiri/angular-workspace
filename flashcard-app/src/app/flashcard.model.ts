export class Flashcard {

  constructor(public id : number, public term : string, public definition : string, public isEditMode : boolean){}

  isNew() {
    return this.id === 0;
  }
}
