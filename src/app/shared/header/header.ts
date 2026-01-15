import {Component} from '@angular/core';
import {Menu} from '../menu/menu';
import {RouterLink} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    Menu,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private translate: TranslateService) {}

  lang = 'en';
  langIMG="assets/img/en.png"

  ngOnInit(){
    this.getLangFromStorage();
    this.switchLang();
  }

  switchLang() {

    if (this.lang === 'en') {
      this.lang = 'de';
    }else {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
    this.switchImg();
  }

  switchImg(){
    if (this.lang == 'en') {
      this.langIMG = "assets/img/de.png";
      localStorage.setItem('lang', 'de');
    }else {
      this.langIMG = "assets/img/en.png";
      localStorage.setItem('lang', 'en');
    }
  }

  getLangFromStorage(){
    let localLang = localStorage.getItem('lang');
    if (localLang == null) {
      this.lang = 'en';
    }else {
      this.lang = localLang;
    }
  }



  links = [
    {
      name: "Home",
      link: "home",
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
      name: "Skills",
      link: "skills",
      isSection: true
    },
    {
      name: "Contact",
      link: "contact-dialog",
      isSection: true
    }
  ]
}

