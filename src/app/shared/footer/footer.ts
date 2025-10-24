import { Component, ViewChild, ElementRef } from '@angular/core';
import { HighlightStore } from '../highlight.store';
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
      link: "https://github.com/KevinFi92"
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/kevin-fischer-39a6b734a/"
    },
    {
      name: "Email",
      link: "email",
      isAction: true
    }
  ]


  constructor(private highlightStore: HighlightStore) {}

  handleLinkClick(action: string) {
    if (action === 'email') {
      this.onEmailClick();
    }
  }
  onEmailClick() {
    this.highlightStore.triggerHighlight();
  }
}
