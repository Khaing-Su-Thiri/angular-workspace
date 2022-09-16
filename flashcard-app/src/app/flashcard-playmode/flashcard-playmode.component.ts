import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard.model';
import { FlashcardsetService } from '../flashcardset.service';

@Component({
  selector: 'app-flashcard-playmode',
  templateUrl: './flashcard-playmode.component.html',
  styleUrls: ['./flashcard-playmode.component.scss']
})
export class FlashcardPlaymodeComponent implements OnInit {

  flashcards : Array<Flashcard> = [];

  flashcard : Flashcard = new Flashcard(0, "", "", false);

  wrongCount : number = 0;
  correctCount : number = 0;
  percentage : number = 0;

  isShowResult : boolean = false;

  constructor(private flashcardSetService : FlashcardsetService) { }

  getFlashcards() {
    this.flashcards = this.flashcardSetService.getCurrentFlashcardSet().flashcards;
  }

  countCard(status : string) {
    if(status === "correct")
      this.correctCount += 1;
    else
      this.wrongCount += 1;

    this.percentage = ( this.flashcard.id / this.flashcards.length ) * 100;

    if(this.flashcard.id < this.flashcards.length)
      this.flashcard = this.flashcards[this.flashcard.id];

    if(this.flashcard.id === this.flashcards.length)
      this.isShowResult = true;
  }

  changePlaymode() {
    this.flashcardSetService.changePlaymode(false);
  }

  ngOnInit(): void {
    this.getFlashcards();
    this.flashcard = this.flashcards[0];
  }
}
