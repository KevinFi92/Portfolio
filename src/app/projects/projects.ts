import { Component } from '@angular/core';
import { SingleProject } from './single-project/single-project';

@Component({
  selector: 'app-projects',
  imports: [SingleProject],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = [
    {
    name: "Join",
    description: "Join is a Kanbanboard to organize your teams tasks." +
      "Its build with Javascript and Firebase.",
    image: "assets/img/projects/join.png"
  },
    {
      name: "El-Pollo-Loco",
      description: "EL-Pollo-Loco is a 2D Videogame made with Javascript.",
      image: "assets/img/projects/el_pollo_loco.png"
    },
    {
      name: "DABubble",
      description: "",
      image: ""
    }
]

}
