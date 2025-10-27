import {Component, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Projects } from './projects/projects';
import { AboutMe } from './about-me/about-me';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import {Skills} from './skills/skills';
import {MatDialogModule} from '@angular/material/dialog';
import {ContactMe} from './contact-me/contact-me';
import { NgOptimizedImage } from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, Projects, Header, Footer, AboutMe, Skills, MatDialogModule, ContactMe, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 hier wird immer nach oben gescrollt
      });
  }

}

