import { Component, ViewChild, ElementRef } from '@angular/core';
import { HighlightStore } from './highlight.store';
import {Menu} from '../menu/menu';

@Component({
  selector: 'app-footer',
  imports: [
    Menu
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  links = [
    {
      name: "GitHub",
      link: "https://github.com/Kevin-Klein"
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/kevin-klein-00000020b/"
    },
    {
      name: "Email",
      link: "(click)=\"onEmailClick()\""
    }
  ]


  constructor(private highlightStore: HighlightStore) {}

  onEmailClick() {
    this.highlightStore.triggerHighlight();
  }
}
