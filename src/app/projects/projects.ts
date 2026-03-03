import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SingleProject} from './single-project/single-project';
import { register } from 'swiper/element/bundle';
import {TranslatePipe} from '@ngx-translate/core';


register();
@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [SingleProject, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {


  projects = [
    {
      name: "Join",
      description: "PROJECTS.ITEMS.PROJECT_1.DESCRIPTION",
      image: "assets/img/projects/join.png",
      link: "https://kevin-fischer.dev/Join",
      GitHub: "https://github.com/KevinFi92/Join",
      inProgress: false
    },
    {
      name: "El-Pollo-Loco",
      description: "PROJECTS.ITEMS.PROJECT_2.DESCRIPTION",
      image: "assets/img/projects/el_pollo_loco.png",
      link: "https://kevin-fischer.dev/El-Pollo-Loco",
      GitHub: "https://github.com/KevinFi92/El-Pollo-Loco",
      inProgress: false
    },

  ]

}

