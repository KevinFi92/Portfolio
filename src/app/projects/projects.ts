import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SingleProject} from './single-project/single-project';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();
@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [SingleProject],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = [
    {
      name: "Join",
      description: "Join is a web-based Kanban tool with an integrated contact list that enables efficient task and team management. It is built using modern web technologies and uses Firebase as the backend for authentication, database, and real-time synchronization." +
        "",
      image: "assets/img/projects/join.png"
    },
    {
      name: "El-Pollo-Loco",
      description: "El Pollo Loco is a 2D jump ’n’ run game developed in JavaScript, with a focus on object-oriented programming. Help Pepe defeat the crazy chicken!",
      image: "assets/img/projects/el_pollo_loco.png"
    },
    {
      name: "DABubble",
      description: "This Project is a slack/discord Clone made with Angular.",
      image: "assets/img/myLogo.png"
    }
  ]

}
