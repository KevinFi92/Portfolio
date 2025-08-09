import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from './shared/contact-me/contact-form';
import { LandingPage } from './landing-page/landing-page';
import { Projects } from './projects/projects';
import { AboutMe } from './thats-me/about-me/about-me';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import {ThatsMe} from './thats-me/thats-me';
import {Skills} from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactForm, LandingPage, Projects, Header, Footer, AboutMe, ThatsMe, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');


}

