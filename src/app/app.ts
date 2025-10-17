import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from './shared/contact-me/contact-form';
import { LandingPage } from './landing-page/landing-page';
import { Projects } from './projects/projects';
import { AboutMe } from './about-me/about-me';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import {Skills} from './skills/skills';
import {MatDialogModule} from '@angular/material/dialog';
import {ContactDialog} from './contact-dialog/contact-dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactForm, LandingPage, Projects, Header, Footer, AboutMe, Skills, MatDialogModule, ContactDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');


}

