import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashcardSet } from '../flashcardset.model';
import { FlashcardsetService } from '../flashcardset.service';

@Component({
  selector: 'app-flashcard-sets',
  templateUrl: './flashcard-sets.component.html',
  styleUrls: ['./flashcard-sets.component.scss']
})
export class FlashcardSetsComponent implements OnInit, OnDestroy {

  flashcardSets : Array<FlashcardSet> = [];

  name : string = "";
  description : string = "";

  flashCardSetsSub : Subscription = new Subscription();

  previousSelectedLi! : HTMLLIElement;

  constructor(private flashcardsetService : FlashcardsetService, private renderer2 : Renderer2) { }

  updateSet(flashcardSet : FlashcardSet) {
    flashcardSet.isEditMode = !flashcardSet.isEditMode;
    this.flashcardsetService.updateSet(flashcardSet);
  }

  selectCard(li : HTMLLIElement, flashcardSet : FlashcardSet) {
    if(this.previousSelectedLi)
      this.renderer2.removeClass(this.previousSelectedLi, "active");
    this.renderer2.addClass(li, "active");
    this.previousSelectedLi = li;
    this.flashcardsetService.addCurrentFlashcardSet(flashcardSet);
  }

  ngOnInit(): void {
    this.flashCardSetsSub = this.flashcardsetService.flashcardSetsChanged.subscribe(data => {
      this.flashcardSets = data;
    });
  }

  ngOnDestroy() {
    this.flashCardSetsSub.unsubscribe();
  }

}
