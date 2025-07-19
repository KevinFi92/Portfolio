import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { ContactForm } from './contact-me/contact-form';

@Component({
  selector: 'app-thats-me',
  imports: [
    AboutMe,
    ContactForm
  ],
  templateUrl: './thats-me.html',
  styleUrl: './thats-me.scss'
})
export class ThatsMe {

}
