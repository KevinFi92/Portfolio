import { Component, ViewChild, ElementRef } from '@angular/core';
import { HighlightStore } from './highlight.store';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private highlightStore: HighlightStore) {}

  onEmailClick() {
    this.highlightStore.triggerHighlight();
  }
}
