import {Component} from '@angular/core';
import {Menu} from '../menu/menu';
import {RouterLink} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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
  constructor(private translate: TranslateService) {}

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  links = [
    {
      name: "{{ 'NAV.HOME' | translate }}",
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

