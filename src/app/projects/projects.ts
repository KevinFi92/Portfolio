import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SingleProject} from './single-project/single-project';
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
      image: "assets/img/projects/join.png",
      link: "https://kevin-fischer.dev/Join",
      GitHub: "https://github.com/KevinFi92/Join"
    },
    {
      name: "El-Pollo-Loco",
      description: "El Pollo Loco is a 2D jump ’n’ run game developed in JavaScript, with a focus on object-oriented programming. Help Pepe defeat the crazy chicken!",
      image: "assets/img/projects/el_pollo_loco.png",
      link: "https://kevin-fischer.dev/El-Pollo-Loco",
      GitHub: "https://github.com/KevinFi92/El-Pollo-Loco"
    },
    {
      name: "DABubble",
      description: "This Project will be a slack/discord Clone made with Angular. Work in progress...",
      image: "assets/img/myLogo.png",
      link: "https://kevin-fischer.dev/#projects",
      GitHub: "https://github.com/KevinFi92"
    }
  ]

}
