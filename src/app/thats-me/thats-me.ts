import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import {Skills} from '../skills/skills';

@Component({
  selector: 'app-thats-me',
  imports: [
    AboutMe,
    Skills
  ],
  templateUrl: './thats-me.html',
  styleUrl: './thats-me.scss'
})
export class ThatsMe {

}
