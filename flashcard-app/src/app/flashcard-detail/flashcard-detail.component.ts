import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flashcard } from '../flashcard.model';
import { FlashcardSet } from '../flashcardset.model';
import { FlashcardsetService } from '../flashcardset.service';

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.component.html',
  styleUrls: ['./flashcard-detail.component.scss']
})
export class FlashcardDetailComponent implements OnInit, OnDestroy {

  flashcards : Array<Flashcard> = [];
  term : string = "";
  definition : string = "";
  flashcardSub = new Subscription();
  isShowAddButton : boolean = false;

  constructor(private flashcardsetService : FlashcardsetService) { }

  addCard() {
    this.flashcardsetService.addFlashCardToSet(new Flashcard(0, "", "", true));
  }

  getFlashcardSet() {
    this.flashcards = this.flashcardsetService.getCurrentFlashcardSet().flashcards;
    this.flashcardSub = this.flashcardsetService.currentFlashcardSetChanged.subscribe((data) => {
      this.flashcards = data.flashcards;
      this.isShowAddButton = true;
    });

    if(this.flashcards.length >= 1)
      this.isShowAddButton = true;
  }

  updateCard(flashcard : Flashcard) {
    flashcard.isEditMode = !flashcard.isEditMode;
    this.flashcardsetService.updateFlashCardToSet(flashcard);
  }

  changePlaymode() {
    this.flashcardsetService.changePlaymode(true);
  }

  ngOnInit(): void {
    this.getFlashcardSet();
  }

  ngOnDestroy() {
    this.flashcardSub.unsubscribe();
  }

}
