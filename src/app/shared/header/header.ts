import { Component } from '@angular/core';
import {Menu} from '../menu/menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    Menu,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  links = [
    {
      name: "Home",
      link: "",
      isRoute: true
    },
    {
      name: "About Me",
      link: "about-me",
      isSection: true
    },
    {
      name: "Projects",
      link: "projects",
      isSection: true
    },
    {
      name: "Contact",
      link: "contact-dialog",
      isSection: true
    }
  ]
}
