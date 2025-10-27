import { Component, ViewChild, ElementRef } from '@angular/core';
import { HighlightStore } from '../highlight.store';
import {Menu} from '../menu/menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    Menu,
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  links = [
    {
      name: "GitHub",
      link: "https://github.com/KevinFi92",
      isExternal: true
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/kevin-fischer-39a6b734a/",
      isExternal: true
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
