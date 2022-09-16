import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flashcard } from './flashcard.model';
import { FlashcardSet } from './flashcardset.model';
import { FlashcardsetService } from './flashcardset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isPlayMode : boolean = false;

  playmodeSub = new Subscription();

  constructor(private flashcardService : FlashcardsetService) {}

  addSet() {
    this.flashcardService.addSet(new FlashcardSet(0, "", "", [], true));
  }

  ngOnInit() {
    this.playmodeSub = this.flashcardService.playmodeChanged.subscribe((data) => this.isPlayMode = data);
  }

  ngOnDestroy() {
    this.playmodeSub.unsubscribe();
  }
}
