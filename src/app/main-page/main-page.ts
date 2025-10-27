import {AfterViewInit, Component} from '@angular/core';
import {AboutMe} from "../about-me/about-me";
import {ContactMe} from "../contact-me/contact-me";
import {LandingPage} from "../landing-page/landing-page";
import {Projects} from "../projects/projects";
import {Skills} from "../skills/skills";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-page',
    imports: [
        AboutMe,
        ContactMe,
        LandingPage,
        Projects,
        Skills
    ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
    });
  }
}
